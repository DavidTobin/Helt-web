var _             = require('underscore'),
    connect       = require('connect'),
    http          = require('http'),
    compression   = require('compression'),
    responseTime  = require('response-time'),
    serveStatic   = require('serve-static'),
    color         = require('colors'),
    app           = connect(),
    heartString   = '';

// Load middleware
app.use(compression());
app.use(responseTime());
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
