docker.io
=========
[![Build Status](https://7.hidemyass.com/ip-1/encoded/Oi8vY2kuYXBwZXJzb25sYWJzLmNvbS9pbWFnZXMvYmFkZ2VzL2J1aWxkX3Bhc3NpbmcucG5n)](http://ci.appersonlabs.com/appersonlabs/docker.io/)
[![Dep Status](https://david-dm.org/appersonlabs/docker.io.png)](https://david-dm.org/appersonlabs/docker.io)
[![devDependency Status](https://david-dm.org/appersonlabs/docker.io/dev-status.png)](https://david-dm.org/appersonlabs/docker.io#info=devDependencies) [![OpenCollective](https://opencollective.com/dockerio/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/dockerio/sponsors/badge.svg)](#sponsors)


[![NPM](https://nodei.co/npm/docker.io.png?downloads=true&stars=true)](https://nodei.co/npm/docker.io/)


Node.JS wrapper for low-level Docker.io HTTP interface

## Usage

### Using unix sockets (most secure)

```javascript

// Sockets are used by default.
var docker = require('docker.io')({ socketPath: '/var/run/docker.sock' });

```

### Using TCP connection

```javascript

// You must specify socketPath: false to indicate you want to use TCP connections.
var docker = require('docker.io')({ socketPath: false, host: 'http://localhost', port: '4243'});

```

The defaults for the connection options are:

- socketPath: /var/run/docker.sock
- host: http://localhost
- port: 4243

### API calls

Here is an example API call, more examples can be found [here](examples.md)

```javascript

var options = {}; // all options listed in the REST documentation for Docker are supported.

docker.containers.list(options /* optional*/, function(err, res) {
    if (err) throw err;
    console.log("data returned from Docker as JS object: ", res);
});

```

### API calls (w/streams)

```javascript
//tty:true
docker.containers.attach('hi74y2i34yi23', {stream: true, stdout: true, stderr: true, tty: true}, function(err, stream) {
  stream.pipe(process.stdout);
});

//tty:false
docker.containers.attach('hi74y2i34yi23', ({stream: true, stdout: true, stderr: true, tty: false}, function(err, stream) {
  //http://docs.docker.io/en/latest/api/docker_remote_api_v1.7/#post--containers-(id)-attach
  docker.demuxStream(stream, process.stdout, process.stderr);
});

docker.image.create({fromImage: 'ubuntu'}, function(err, stream) {
  stream.pipe(process.stdout);
});
```

## Contributing

PULL REQUESTS ARE WELCOME!

Concerned that your PR would change too much? File a ticket, I am willing to hear arguments for change :)

## Changes
### 0.9.8
    - Fixed a typo that caused an error when using the module.

### 0.9.7
    - A MAJOR issue was fixed where the wrong endpoints were being called. If you were using a 0.9.x version of docker.io already, you should upgrade ASAP!

### 0.9.3
    - Uses docker-modem now for a better shared codebase with the community!
    - Known issues: attach still needs to be updated for the new API

### 0.9.2
    - Streams! APIs that have a streaming response, docker.io returns a Stream object now!
    - Now has support for ALL API  endpoints
    - Attach endpoint now works again
    - Known issues: attach still needs to be updated for the new API

## Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/dockerio#backer)]

<a href="https://opencollective.com/dockerio/backer/0/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/1/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/2/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/3/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/4/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/5/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/6/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/7/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/8/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/9/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/10/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/11/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/12/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/13/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/14/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/15/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/16/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/17/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/18/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/19/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/20/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/21/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/22/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/23/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/24/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/25/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/26/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/27/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/28/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/backer/29/website" target="_blank"><img src="https://opencollective.com/dockerio/backer/29/avatar.svg"></a>

## Sponsors

Become a sponsor and get your logo on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/dockerio#sponsor)]

<a href="https://opencollective.com/dockerio/sponsor/0/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/1/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/2/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/3/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/4/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/5/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/6/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/7/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/8/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/9/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/10/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/11/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/12/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/13/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/14/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/15/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/16/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/17/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/18/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/19/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/20/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/21/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/22/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/23/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/24/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/25/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/26/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/27/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/28/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/dockerio/sponsor/29/website" target="_blank"><img src="https://opencollective.com/dockerio/sponsor/29/avatar.svg"></a>

## License

Copyright 2013 Apperson Labs, LLC
http://appersonlabs.com
matt@appersonlabs.com

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
