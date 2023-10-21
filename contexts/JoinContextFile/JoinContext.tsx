import { createContext, useContext, useReducer } from 'react';
import reducer from '../../components/Reducers/JoinReducer';
import {
  IcontextProviderProps,
  IjoinContextInitialState,
} from './types/JoinContextTypes';

const initialState: IjoinContextInitialState = {
  joinData: {},
};

const JoinContext = createContext<IjoinContextInitialState>(initialState);

const JoinContextProvidor = ({ children }: IcontextProviderProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <JoinContext.Provider value={{ ...state, dispatch }}>
      {children}
    </JoinContext.Provider>
  );
};

const useJoinContext = () => {
  return useContext(JoinContext);
};

export { JoinContextProvidor, useJoinContext };
