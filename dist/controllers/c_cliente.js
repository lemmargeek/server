"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newCliente = newCliente;

var _m_cliente = _interopRequireDefault(require("../models/m_cliente"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function newCliente(_x, _x2) {
  return _newCliente.apply(this, arguments);
}

function _newCliente() {
  _newCliente = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, cliente_dni, cliente_apellido, cliente_nombre, cliente_fechanac, cliente_direccion, cliente_email, cliente_username, cliente_pass, newClienteR;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, cliente_dni = _req$body.cliente_dni, cliente_apellido = _req$body.cliente_apellido, cliente_nombre = _req$body.cliente_nombre, cliente_fechanac = _req$body.cliente_fechanac, cliente_direccion = _req$body.cliente_direccion, cliente_email = _req$body.cliente_email, cliente_username = _req$body.cliente_username, cliente_pass = _req$body.cliente_pass;
            console.log(req.body);
            _context.prev = 2;
            _context.next = 5;
            return _m_cliente["default"].create({
              cliente_dni: cliente_dni,
              cliente_apellido: cliente_apellido,
              cliente_nombre: cliente_nombre,
              cliente_fechanac: cliente_fechanac,
              cliente_direccion: cliente_direccion,
              cliente_email: cliente_email,
              cliente_username: cliente_username,
              cliente_pass: cliente_pass
            }, {
              fields: [cliente_dni, cliente_apellido, cliente_nombre, cliente_fechanac, cliente_direccion, cliente_email, cliente_username, cliente_pass]
            });

          case 5:
            newClienteR = _context.sent;

            if (!newClienteR) {
              _context.next = 8;
              break;
            }

            return _context.abrupt("return", res.json({
              message: 'Cliente registrado con exito'
            }));

          case 8:
            _context.next = 14;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Ocurrio un error al insertar datos'
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 10]]);
  }));
  return _newCliente.apply(this, arguments);
}