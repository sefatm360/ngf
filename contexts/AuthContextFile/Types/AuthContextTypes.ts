import { Dispatch } from 'react';

export interface Iuser {
  address?: string;
  city?: string;
  email?: string;
  id?: number;
  lat?: null | string;
  lng?: null | string;
  name?: string;
  phone?: number;
  photo?: null | string;
  post_code?: number;
  divison?: string;
}

export interface IsignUp {
  city: string;
  password: string;
  name: string;
  email: string;
  address: string;
  post_code: string;
  phone: string;
  division: string;
}

export interface IauthContextState {
  user: Iuser;
  signUp: IsignUp;
  token: string;
  dispatch?: Dispatch<any>;
  lang?: string;
  setLang?: () => void;
}
