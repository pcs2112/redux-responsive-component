import { isDOMAvailable } from 'javascript-utils/lib/device';
import { isNumber } from 'javascript-utils/lib/number';

export const SET_MOBILE_DETECT = '@@redux-responsive-component/SET_MOBILE_DETECT';

const breakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
};

/**
 * Call before using this module to override the default breakpoints.
 *
 * @param {Object} newBreakPoints
 */
export const setBreakPoints = (newBreakPoints) => {
  if (newBreakPoints !== null && typeof newBreakPoints === 'object') {
    Object.keys(newBreakPoints).forEach((key) => {
      if (isNumber(newBreakPoints[key])) {
        breakPoints[key] = newBreakPoints[key];
      }
    });
  }
};

export const setMobileDetect = ({
  phone, tablet, mobile, computer
} = {}) => {
  if (!isDOMAvailable()) {
    return {
      type: SET_MOBILE_DETECT,
      phone,
      tablet,
      mobile,
      computer
    };
  }

  const payload = {
    type: SET_MOBILE_DETECT,
    phone: false,
    tablet: false,
    mobile: false,
    computer: false
  };

  const width = document.documentElement.clientWidth || document.body.clientWidth;
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
