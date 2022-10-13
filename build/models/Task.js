"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true
});
var _default = (0, _mongoose.model)('Task', taskSchema);
exports["default"] = _default;