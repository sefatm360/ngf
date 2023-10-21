import { JOIN_TRY_SUCCESS } from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case JOIN_TRY_SUCCESS:
      return { ...state, joinData: action.payload };

    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
