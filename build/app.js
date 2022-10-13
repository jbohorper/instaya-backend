"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _productsRoutes = _interopRequireDefault(require("./routes/products.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _requestsRoutes = _interopRequireDefault(require("./routes/requests.routes.js"));
var _packageRoutes = _interopRequireDefault(require("./routes/package.routes.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// Routes

var app = (0, _express["default"])();

// settings
app.set("port", process.env.PORT || 4000);

// middlewares
var corsOptions = {
  // origin: "http://localhost:3000",
};
app.use((0, _cors["default"])(corsOptions));
app.use((0, _helmet["default"])());
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));

//routes
app.get("/", _index["default"]);
app.use("/api/tasks", _tasks["default"]);
app.use("/api/products", _productsRoutes["default"]);
app.use("/api/users", _userRoutes["default"]);
app.use("/api/auth", _authRoutes["default"]);
app.use("/api/requests", _requestsRoutes["default"]);
app.use("/api/packages", _packageRoutes["default"]);
var _default = app;
exports["default"] = _default;