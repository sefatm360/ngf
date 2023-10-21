import { SET_CART_SUCCESS } from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_CART_SUCCESS:
      return { ...state, cart: action.payload };
    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
