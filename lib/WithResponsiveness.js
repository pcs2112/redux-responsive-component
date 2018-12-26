"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _react2 = require("javascript-utils/lib/react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var withResponsiveness = function withResponsiveness(WrappedComponent) {
  var stateName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'responsive';

  var WithResponsiveness = function WithResponsiveness(props) {
    return _react.default.createElement(WrappedComponent, props);
  };

  WithResponsiveness.propTypes = {
    mobile: _propTypes.default.bool.isRequired,
    tablet: _propTypes.default.bool.isRequired,
    phone: _propTypes.default.bool.isRequired,
    desktop: _propTypes.default.bool.isRequired,
    device: _propTypes.default.string.isRequired
  };
  WithResponsiveness.displayName = "WithResponsiveness(".concat((0, _react2.getDisplayName)(WrappedComponent), ")");
  return (0, _reactRedux.connect)(function (state) {
    return _objectSpread({}, state[stateName]);
  })(WithResponsiveness);
};

var _default = withResponsiveness;
exports.default = _default;
module.exports = exports.default;