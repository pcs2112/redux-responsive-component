'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actions = require('./actions');

var initialState = exports.initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: true,
  device: 'computer'
};

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actions.SET_MOBILE_DETECT:
      {
        // use initialState as the default values
        var _initialState$action = _extends({}, initialState, action),
            mobile = _initialState$action.mobile,
            tablet = _initialState$action.tablet,
            phone = _initialState$action.phone,
            desktop = _initialState$action.desktop;

        var device = void 0;
        if (mobile) {
          device = 'mobile';
        } else if (tablet) {
          device = 'tablet';
        } else {
          device = 'computer';
        }

        return _extends({}, state, { mobile: mobile, tablet: tablet, phone: phone, desktop: desktop, device: device
        });
      }
    default:
      return state;
  }
};