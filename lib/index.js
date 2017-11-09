'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withResponsiveness = exports.reducer = exports.setMobileDetect = undefined;

var _actions = require('./actions');

Object.defineProperty(exports, 'setMobileDetect', {
  enumerable: true,
  get: function get() {
    return _actions.setMobileDetect;
  }
});

var _reducer2 = require('./reducer');

var _reducer3 = _interopRequireDefault(_reducer2);

var _WithResponsiveness = require('./WithResponsiveness');

var _WithResponsiveness2 = _interopRequireDefault(_WithResponsiveness);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer3.default;
exports.withResponsiveness = _WithResponsiveness2.default;