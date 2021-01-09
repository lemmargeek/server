"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

var _database = require("../config/database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Sesiones = _database.db.define('sesiones', {
  sescliidgf: {
    type: _sequelize["default"].UUID,
    allowNull: false,
    validate: {
      notNull: true
    }
  },
  sesfechaingf: {
    type: 'TIMESTAMP WITHOUT TIME ZONE',
    allowNull: true,
    defaultValue: _sequelize["default"].literal('CURRENT_TIMESTAMP'),
    validate: {
      isNull: true
    }
  },
  sesdirecciongf: {
    type: _sequelize["default"].STRING(15),
    allowNull: false,
    validate: {
      isIP: true,
      isIPv4: true
    }
  }
});

var _default = Sesiones;
exports["default"] = _default;