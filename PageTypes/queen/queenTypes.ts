export interface Iqueen {
  join_date: string;
  account_number: string | null;
  address: string;
  bank_name: string | null;
  name: string;
  nid_back: string | null;
  nid_front: string | null;
  phone: number;
  photo: string;
  post_code: number;
  city: string;
  email: string;
  designation: string;
}
export interface IqueenProduct {
  id: number;
  queen_dp: string;
  product_name: string;
  product_picture_1: string;
  product_picture_2: string;
  price: number;
  category: string;
  tags: string;
  weight: number;
  delivery_day: number;
  stock_status: number;
}

export interface IqueenProps {
  data: {
    data: {
      data: Iqueen;
      success: boolean;
    };
    productData: {
      succees: boolean;
      data: IqueenProduct[];
    };
  };
}

export interface Iproductprops {
  success: boolean;
  data: IqueenProduct[];
}
