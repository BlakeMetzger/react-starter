const express = require('express');
const proxy = require('http-proxy-middleware');

var app = express();

module.exports = function(app) {
	app.use('/auth/google', proxy({ target: 'http://localhost:5000' }));
	app.use('/api/*', proxy({ target: 'http://localhost:5000' }));
};


// const proxy = require('http-proxy-middleware');
// module.exports = function(app) {
// 	app.use(proxy('/auth/google', { target: 'http://localhost:5000' }));
// 	app.use(proxy('/api/*', { target: 'http://localhost:5000' }));
// };
