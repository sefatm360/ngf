import { SET_SIGNUP_DATA } from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_SIGNUP_DATA:
      return { ...state, [action.payload.field]: action.payload.value };

    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
