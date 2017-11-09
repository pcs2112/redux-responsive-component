'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _react3 = require('javascript-utils/lib/react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withResponsiveness = function withResponsiveness(WrappedComponent) {
  var stateName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'responsive';

  var WithResponsiveness = function WithResponsiveness(props) {
    return _react2.default.createElement(WrappedComponent, props);
  };

  WithResponsiveness.propTypes = {
    mobile: _propTypes2.default.bool.isRequired,
    tablet: _propTypes2.default.bool.isRequired,
    phone: _propTypes2.default.bool.isRequired,
    desktop: _propTypes2.default.bool.isRequired,
    device: _propTypes2.default.string.isRequired
  };

  WithResponsiveness.displayName = 'WithResponsiveness(' + (0, _react3.getDisplayName)(WrappedComponent) + ')';

  return (0, _reactRedux.connect)(function (state) {
    return _extends({}, state[stateName]);
  })(WithResponsiveness);
};

exports.default = withResponsiveness;
module.exports = exports['default'];