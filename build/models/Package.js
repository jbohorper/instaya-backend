"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var packageSchema = new _mongoose["default"].Schema({
  description: {
    type: String,
    required: true,
    trim: true
  },
  weight: {
    type: Number,
    "default": 0
  },
  dimensions: String
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Package", packageSchema);
exports["default"] = _default;