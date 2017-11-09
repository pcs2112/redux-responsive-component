import { SET_MOBILE_DETECT } from './actions';

export const initialState = {
  phone: false,
  tablet: false,
  mobile: false,
  desktop: true,
  device: 'computer'
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MOBILE_DETECT: {
      // use initialState as the default values
      const {
        mobile, tablet, phone, desktop
      } = { ...initialState, ...action };

      let device;
      if (mobile) {
        device = 'mobile';
      } else if (tablet) {
        device = 'tablet';
      } else {
        device = 'computer';
      }

      return {
        ...state, mobile, tablet, phone, desktop, device,
      };
    }
    default:
      return state;
  }
};
