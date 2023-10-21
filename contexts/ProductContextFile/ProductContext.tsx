import axios from 'axios';
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { FETCH_PRODUCTS_SUCCESS, url } from '../../components/Helpers/Constant';

import reducer from '../../components/Reducers/ProductReducer';

const initialState: any = {
  products: [],
};
const ProductContext = createContext(initialState);

const ProductContextProvidor = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [fetching, setFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`${url}/api/admin/product/get/approved/all?limit=32&skip=0`)
      .then((res) => {
        dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: res.data.data });
        setFetching(false);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ ...state, dispatch, fetching }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(ProductContext);
};

export { ProductContextProvidor, useProductContext };
