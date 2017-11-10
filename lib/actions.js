'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileDetect = exports.setBreakPoints = exports.SET_MOBILE_DETECT = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _device = require('javascript-utils/lib/device');

var _number = require('javascript-utils/lib/number');

var SET_MOBILE_DETECT = exports.SET_MOBILE_DETECT = '@@redux-responsive-component/SET_MOBILE_DETECT';

var breakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
};

/**
 * Call before using this module to override the default breakpoints.
 *
 * @param {Object} newBreakPoints
 */
var setBreakPoints = exports.setBreakPoints = function setBreakPoints(newBreakPoints) {
  if (newBreakPoints !== null && (typeof newBreakPoints === 'undefined' ? 'undefined' : _typeof(newBreakPoints)) === 'object') {
    Object.keys(newBreakPoints).forEach(function (key) {
      if ((0, _number.isNumber)(newBreakPoints[key])) {
        breakPoints[key] = newBreakPoints[key];
      }
    });
  }
};

var setMobileDetect = exports.setMobileDetect = function setMobileDetect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      phone = _ref.phone,
      tablet = _ref.tablet,
      mobile = _ref.mobile,
      computer = _ref.computer;

  if (!(0, _device.isDOMAvailable)()) {
    return {
      type: SET_MOBILE_DETECT,
      phone: phone,
      tablet: tablet,
      mobile: mobile,
      computer: computer
    };
  }

  var payload = {
    type: SET_MOBILE_DETECT,
    phone: false,
    tablet: false,
    mobile: false,
    computer: false
  };

  var width = document.documentElement.clientWidth || document.body.clientWidth;
  if (width < breakPoints.tablet) {
    payload.phone = true;
  } else if (width < breakPoints.computer) {
    payload.tablet = true;
  } else {
    payload.computer = true;
  }

  if (payload.phone || payload.tablet) {
    payload.mobile = true;
  }

  return payload;
};