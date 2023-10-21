import { createContext, useContext, useEffect, useReducer } from 'react';
import { SET_CART_SUCCESS } from '../../components/Helpers/Constant';
import reducer from '../../components/Reducers/CartReducer';
import { IinitialStateCart } from './types/CartContextTypes';
import { IcontextProviderChildren } from '../CommonContextTypes/CommonContextTypes';

const initialState: IinitialStateCart = {
  cart: [],
};
const CartContext = createContext<IinitialStateCart>(initialState);

const CartContextProvidor = ({ children }: IcontextProviderChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [quantity, setQuantity] = useState(1);
  useEffect(() => {
    const cartData = localStorage.getItem('cart');

    if (cartData) {
      const nowCart = JSON.parse(cartData);
      if (nowCart) {
        dispatch({ type: SET_CART_SUCCESS, payload: nowCart });
      }
    }
  }, []);
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartContextProvidor, useCartContext };
