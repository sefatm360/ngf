import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { AUTH_USER_SUCCESS } from '../../components/Helpers/Constant';
import reducer from '../../components/Reducers/AuthReducer';
import { IauthContextState } from './Types/AuthContextTypes';
import { destroyCookie, parseCookies } from 'nookies';
import * as jose from 'jose';

const initialState: IauthContextState = {
  user: {},
  token: '',
  signUp: {
    city: '',
    password: '',
    name: '',
    email: '',
    address: '',
    post_code: '',
    phone: '',
    division: '',
  },
};

const AuthContext = createContext(initialState);
const AuthContextProvidor = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    (async () => {
      const cookies = parseCookies();
      setIsLoading(true);
      if (cookies) {
        try {
          const { payload } = await jose.jwtVerify(
            cookies.__ca_otw as string,
            new TextEncoder().encode(
              process.env.NEXT_PUBLIC_JWT_SECRET as string
            )
          );
          dispatch({
            type: AUTH_USER_SUCCESS,
            payload: { user: payload, token: cookies.ca_otw },
          });
          setIsLoading(false);
        } catch (error) {
          dispatch({
            type: AUTH_USER_SUCCESS,
            payload: { user: {}, token: '' },
          });
          destroyCookie(null, '__ca_otw');
          setIsLoading(false);
        }
      } else {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, isLoading, lang, setLang }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContextProvidor, useAuthContext };
