var clone = require('node-v8-clone').clone,
    validator = require('flat-validator'),
    parse = require('url').parse;

var Endpoint = function(type, o) {
    var API;

    this.path = o.path

    this.streamReply = o.streamReply;
    this.jsonStreamReply = o.jsonStreamReply;

    this.forceURLParams = o.forceURLParams;
    this.urlParams = o.urlParams;
    this.args = o.args;
    this.modem = o.modem;
    this.method = o.method;
    this.statusCodes = o.statusCodes;
    this.type = type;

    (function(endpointThis) {
        var endpoint = clone(endpointThis);
        API = function() {
            if (!(this instanceof API)) {
                var args = Array.prototype.concat.apply([null], arguments);
                return new(Function.prototype.bind.apply(API, args));
            }

            var self = this,
                data,
                validArgs;

            this.callback = arguments[arguments.length - 1];

            this.error = function(message) {
                self.callback(message, {});
            };

            // assign argumets to a named var
            switch (type) {
                case 'id':
                    this.id = arguments[0];

                    // make sure arguments are passed in correctly
                    //
                    if (typeof this.id !== 'string' || this.id === "") {
                        return this.error('The first argument "ID" should be a string...');
                    }

                    endpoint.path = endpoint.path.replace('${id}', this.id);

                    // allow for options or ignore them
                    if (arguments.length > 2) {
                        endpoint.options = arguments[1];
                    }

                    break;
                case 'file':
                    endpoint.file = arguments[0];

                    // allow for options or ignore them
                    if (arguments.length > 2) {
                        if (typeof(arguments[1]) === 'string') {
                            endpoint.options = {};
                            endpoint.options.t = arguments[1];
                        } else {
                            endpoint.options = arguments[1];
                        }
                    }
                    break;
                case 'options':
                    if (arguments.length > 1) {
                        endpoint.options = arguments[0];
                    } else {
                        endpoint.options = {};
                    }
                    break;
            }
            //endpoint.path.replace('${id}', this.id);
            var validParams = validator.validate(endpoint.options, endpoint.args);

            // note that we dont check if(validArgs) because a fail returns an object
            if (validParams) {
                endpoint.modem.dial(endpoint, function(err, data) {
                    self.callback(err, data);
                });
            } else {
                endpoint.error(validParams.fieldName + ' Is a ' + validParams.ruleName + ' property for this API, and was not found or did not pass validation.');
            }
        };
    })(this);

    return API;
}

Endpoint.prototype.error = function(message) {
    throw message;
};

Endpoint.prototype.checkStatus = function(err, res, json, cb) {
    if (err) return cb(err, null);
    var s = this.validateStatus(res.statusCode.toString());

    if (typeof json === 'string' && !json.isJson()) {
        json = '{"msg": "' + json.replace(/[^a-zA-Z ]/g, "") + '"}';
    } else if (typeof json === 'string') {
        json = JSON.parse(json);
    }

    if (!s.status) {
        var error = {
            code: res.statusCode,
            msg: this.statusCodes[s]
        }
        return cb(error, undefined);
    }
    if (this.streamReply) {
        return cb(null, res);
    } else {
        return cb(null, json);
    }
};

Endpoint.prototype.validateStatus = function(s) {
    if (s in this.statusCodes) {
        return {
            status: this.statusCodes[s] === true,
            msg: this.statusCodes[s]
        };
    }

    return this.error("Docker returned " + s + " a result not supported by this version of the Docker.io for NodeJS");
};


module.exports = Endpoint;