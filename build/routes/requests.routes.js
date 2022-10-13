"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _requests = require("../controllers/requests.controller");
var _authJwt = require("../middlewares/authJwt.js");
var router = (0, _express.Router)();
router.get("/", _requests.getRequests);
router.get("/:requestId", _requests.getRequestById);
router.post("/", [_authJwt.verifyToken, _authJwt.isModerator], _requests.createRequest);
router.put("/:requestId", [_authJwt.verifyToken, _authJwt.isModerator], _requests.updateRequestById);
router["delete"]("/:requestId", [_authJwt.verifyToken, _authJwt.isAdmin], _requests.deleteRequestById);
var _default = router;
exports["default"] = _default;