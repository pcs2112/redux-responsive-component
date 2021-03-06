"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mobileParser = void 0;

var _mobileDetect = _interopRequireDefault(require("mobile-detect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mobileParser = function mobileParser() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$headers = _ref.headers,
      headers = _ref$headers === void 0 ? {} : _ref$headers;

  var ua = headers['user-agent'] || headers['User-Agent'];
  var md = new _mobileDetect.default(ua);
  return {
    phone: !!md.phone(),
    tablet: !!md.tablet(),
    mobile: !!md.mobile(),
    computer: !md.mobile()
  };
};

exports.mobileParser = mobileParser;