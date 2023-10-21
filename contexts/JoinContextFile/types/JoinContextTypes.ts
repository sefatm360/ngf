import { ReactNode, Dispatch } from 'react';

export interface IcontextProviderProps {
  children?: ReactNode;
}

export interface IjoinContextInitialState {
  joinData: {
    phone?: string;
    name?: string;
    address?: string;
    email?: string;
    post_code?: number;
    city?: string;
    id?: number;
  };
  dispatch?: Dispatch<any>;
}
