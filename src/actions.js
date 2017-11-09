import { isDOMAvailable } from 'javascript-utils/lib/device';

export const SET_MOBILE_DETECT = '@@redux-responsive-component/SET_MOBILE_DETECT';

const breakPoints = {
  computer: 992,
  tablet: 768,
  mobile: 320
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
    payload.mobile = false;
  }

  return payload;
};
