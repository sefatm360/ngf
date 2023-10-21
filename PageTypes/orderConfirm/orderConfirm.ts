export interface IconfirmProduct {
  product_name: string;
  product_category: string;
  product_id: number;
  price: number;
  quantity: number;
  queen_id: number;
  delivery_date: string;
}

export interface IconfirmInitialState {
  name?: string;
  phone?: number;
  email?: string;
  address?: string;
  post_code?: number;
  city?: string;
  id?: number;
}
export interface IguestOrder {
  guest_info: IconfirmInitialState;
  delivery_address: string;
  customer_id: number;
  guest: number;
}
