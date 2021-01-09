"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _c_cliente = require("../controllers/c_cliente");

var router = (0, _express.Router)();
router.post('/', _c_cliente.newCliente);
var _default = router;
exports["default"] = _default;