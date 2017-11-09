'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMobileDetect = exports.SET_MOBILE_DETECT = undefined;

var _device = require('javascript-utils/lib/device');

var SET_MOBILE_DETECT = exports.SET_MOBILE_DETECT = '@@redux-responsive-component/SET_MOBILE_DETECT';

var breakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
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
    computer: true
  };

  var width = document.documentElement.clientWidth || document.body.clientWidth;
  if (width < breakPoints.tablet) {
    payload.phone = true;
    payload.mobile = true;
  }

  if (width < breakPoints.computer) {
    payload.tablet = true;
    payload.mobile = true;
  }

  if (payload.mobile) {
    payload.computer = false;
  }

  return payload;
};