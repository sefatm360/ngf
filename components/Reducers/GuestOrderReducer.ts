import {
  SET_GUEST_BY_PHONE,
  SET_GUEST_ORDER_DETAILS,
} from '../Helpers/Constant';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_GUEST_ORDER_DETAILS:
      const tempState = {
        ...state,
      };

      if (action.payload.field === 'phone') {
        tempState[action.payload.field] = Number(action.payload.value);
      } else {
        tempState[action.payload.field] = action.payload.value;
      }
      return tempState;
    case SET_GUEST_BY_PHONE:
      // delete action.payload['guest'];
      return action.payload;
    default:
      throw new Error(`No matching action type - ${action.type}`);
  }
};

export default reducer;
