"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var requestsSchema = new _mongoose["default"].Schema({
  _id: false,
  id_request: {
    type: String,
    unique: true,
    index: true,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  date_request: Date,
  city_source: String,
  city_destiny: String,
  state: {
    type: String,
    "default": "Guardado"
  },
  "package": [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Package"
  }]
}, {
  timestamps: true,
  versionKey: false
});
var _default = _mongoose["default"].model("Requests", requestsSchema);
exports["default"] = _default;