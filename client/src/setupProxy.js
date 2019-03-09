const express = require('express');
const proxy = require('http-proxy-middleware');

var app = express();

module.exports = function(app) {
	app.use('/auth/google', proxy({ target: 'http://localhost:5000' }));
	app.use('/api/*', proxy({ target: 'http://localhost:5000' }));
};
