"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireWildcard(require("sequelize"));

var _database = require("../config/database");

var _m_sesion = _interopRequireDefault(require("./m_sesion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Cliente = _database.db.define('clientes', {
  cliente_id: {
    type: _sequelize["default"].INTEGER,
    primaryKey: true
  },
  cliente_dni: {
    type: _sequelize["default"].STRING(13),
    unique: true
  },
  cliente_apellido: {
    type: _sequelize["default"].STRING(180)
  },
  cliente_nombre: {
    type: _sequelize["default"].STRING(180)
  },
  cliente_fechanac: {
    type: _sequelize["default"].DATE,
    defaultValue: '1999-09-19'
  },
  cliente_direccion: {
    type: _sequelize["default"].STRING(200),
    defaultValue: 'Av. 7 de Agosto y Janeth Alava'
  },
  cliente_email: {
    type: _sequelize["default"].STRING(150),
    defaultValue: 'info@ciclyshop.com'
  },
  cliente_username: {
    type: _sequelize["default"].STRING(50),
    unique: true
  },
  cliente_pass: {
    type: _sequelize["default"].STRING(150)
  },
  cliente_tipo: {
    type: _sequelize["default"].SMALLINT,
    defaultValue: 1
  },
  cliente_estado: {
    type: _sequelize["default"].SMALLINT,
    defaultValue: 1
  },
  createdat: {
    type: 'TIMESTAMP WITHOUT TIME ZONE',
    defaultValue: _sequelize["default"].literal('CURRENT_TIMESTAMP')
  },
  updatedat: {
    type: 'TIMESTAMP WITHOUT TIME ZONE'
  }
}, {
  timestamps: false
});

var _default = Cliente;
exports["default"] = _default;