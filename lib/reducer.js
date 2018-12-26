"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initialState = void 0;

var _actions = require("./actions");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: true,
  device: 'computer'
};
exports.initialState = initialState;

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actions.SET_MOBILE_DETECT:
      {
        // use initialState as the default values
        var _initialState$action = _objectSpread({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var device;

        if (phone) {
          device = 'mobile';
        } else if (tablet) {
          device = 'tablet';
        } else {
          device = 'computer';
        }

        return _objectSpread({}, state, {
          mobile: mobile,
          tablet: tablet,
          phone: phone,
          desktop: desktop,
          device: device
        });
      }

    default:
      return state;
  }
};

exports.default = _default;