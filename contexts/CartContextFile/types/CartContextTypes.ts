import { Dispatch } from 'react';

export interface IcartContext {
  category: string;
  delivery_day: number;
  price: number;
  product_id: number;
  product_name: string;
  product_picture_1: string;
  product_picture_2: string;
  quantity: number;
  queen_id: 1337;
  queen_name: string;
  rating: number | null;
  rating_count: number;
  short_desc: string;
  stock_status: number | null;
  upload_date: string;
  weight: number;
}

export interface IinitialStateCart {
  cart: IcartContext[];
  dispatch?: Dispatch<any>;
}

export interface cart {}
