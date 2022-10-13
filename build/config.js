"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SECRET = exports.PORT = exports.MONGODB_URI = exports.ADMIN_USERNAME = exports.ADMIN_PASSWORD = exports.ADMIN_EMAIL = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tasksdb";
exports.MONGODB_URI = MONGODB_URI;
var PORT = process.env.PORT || 4000;
exports.PORT = PORT;
var SECRET = "yoursecretkey";
exports.SECRET = SECRET;
var ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
exports.ADMIN_EMAIL = ADMIN_EMAIL;
var ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
exports.ADMIN_USERNAME = ADMIN_USERNAME;
var ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";
exports.ADMIN_PASSWORD = ADMIN_PASSWORD;