import { FETCH_PRODUCTS_SUCCESS } from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.payload };

    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
