const express = require('express');
const admin = express.Router();
admin.get('/data', require('./admin/login'));
module.exports = admin;