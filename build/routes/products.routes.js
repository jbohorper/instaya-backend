"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _productsController = require("../controllers/products.controller.js");
var _authJwt = require("../middlewares/authJwt.js");
var router = (0, _express.Router)();
router.get("/", _productsController.getProducts);
router.get("/:productId", _productsController.getProductById);
router.post("/", [_authJwt.verifyToken, _authJwt.isModerator], _productsController.createProduct);
router.put("/:productId", [_authJwt.verifyToken, _authJwt.isModerator], _productsController.updateProductById);
router["delete"]("/:productId", [_authJwt.verifyToken, _authJwt.isAdmin], _productsController.deleteProductById);
var _default = router;
exports["default"] = _default;