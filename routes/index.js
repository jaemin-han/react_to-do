const home = require('express').Router();

// This is the route that serves your '/' homepage
home.get('/', (req, res) => res.json('HOME!'));

module.exports = home;
