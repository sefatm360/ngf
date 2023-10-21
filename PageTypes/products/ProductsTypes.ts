export interface IcategoryProducts {
  id: number;
  product_name: string;
  product_picture_1: string;
  price: number;
  stock_status: number;
  queen_name: string;
  queen_id: number;
  rating: null | number;
}

export interface IfetchData {
  data: {
    success: boolean;
    data: IcategoryProducts[];
  };
}

export interface IcategoryProductProps {
  category: string | string[];
  name: string;
  fetching: IcategoryProducts[];
}

export interface irecentProductProps {
  data: IcategoryProducts[];
}
