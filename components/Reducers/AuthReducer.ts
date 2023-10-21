import { AUTH_USER_SUCCESS, SET_SIGNUP_DATA } from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case AUTH_USER_SUCCESS:
      return { ...state, ...action.payload };
    case SET_SIGNUP_DATA:
      return {
        ...state,
        signUp: {
          ...state.signUp,
          [action.payload.field]: action.payload.value,
        },
      };

    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
