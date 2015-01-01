'use strict';

var _             = require('underscore'),
    connect       = require('connect'),
    http          = require('http'),
    compression   = require('compression'),
    cookieParser	= require('cookie-parser'),
    responseTime  = require('response-time'),
    serveStatic   = require('serve-static'),
    color         = require('colors'),
    request				= require('request'),
    app           = connect(),
    heartString   = '';

// Load middleware
app.use(compression());
app.use(responseTime());
app.use(cookieParser());

// Prevent access to admin views
app.use(function (req, res, next) {
  if (req.url.match(/views\/admin/i) !== null) {
  	if (!req.cookies.token) {
  		res.writeHead(403);
			return res.end();
  	} else {
  		request.get('http://api.helt.io/user/me', {
  			headers: {
  				Authorization: new Buffer(req.cookies.token).toString('base64'),
  				accept: 'application/json, text/plain, */*',
  				origin: 'http://helt.io:3000'
  			}
  		}, function (err, response, body) {
  			if (err) {
  				res.writeHead(403);
  				return res.end();
  			}

  			body = JSON.parse(body);

        console.log(body);

  			if (body.roles && body.roles.indexOf('admin') !== -1) {
  				next();
  			} else {
  				res.writeHead(403);
  				return res.end();
  			}
  		});
  	}
  } else {
		return next();
	}
});


app.use(serveStatic('dist/'));

http.createServer(app).listen(3000);

_.each(new Array(19), function () {
  heartString += '\u2665 ';
});

console.info(heartString.red);
console.info('\u2665'.red + '                ' + 'HELT'.red.bold + '               ' + '\u2665'.red);
console.info('\u2665'.red + '                                   ' + '\u2665'.red);
console.info('\u2665 '.red + '  Server: %s    '.italic + ' \u2665'.red, '127.0.0.1:3000' + new Array(20 - '127.0.0.1:3000'.length).join(' '));
console.info(heartString.red + '\n\n');
