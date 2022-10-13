"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _packageController = require("../controllers/package.controller.js");
var _authJwt = require("../middlewares/authJwt.js");
var router = (0, _express.Router)();
router.get("/", _packageController.getPackages);
router.get("/:packageId", _packageController.getPackageById);
router.post("/", [_authJwt.verifyToken, _authJwt.isModerator], _packageController.createPackage);
router.put("/:packageId", [_authJwt.verifyToken, _authJwt.isModerator], _packageController.updatePackageById);
router["delete"]("/:packageId", [_authJwt.verifyToken, _authJwt.isAdmin], _packageController.deletePackageById);
var _default = router;
exports["default"] = _default;