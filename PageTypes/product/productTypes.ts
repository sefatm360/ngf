export interface IsingleProduct {
  product_id: number;
  upload_date: string;
  product_name: string;
  category: string;
  short_desc: string;
  weight: number;
  product_picture_1: string | null;
  product_picture_2: string | null;
  price: number;
  delivery_day: number;
  stock_status: number;
  queen_name: string;
  queen_id: number;
  rating: number | null;
  rating_count: number;
}
export interface IproductProps {
  productData: {
    success: boolean;
    data: IsingleProduct;
  };
}

export interface IcategoryProduct {
  id: number;
  product_name: string;
  price: number;
  product_picture_1: string | null;
  product_picture_2: string | null;
  queen_id: number;
  queen_name: string;
  rating: null | number;
  stock_status: number;
}

export interface IcategoryProductProps {
  categoryProducts: IcategoryProduct[];
}

// export interface IsingleProduct {
//   product_name: string;
//   category: string;
//   price: number;
//   product_picture_1: string | null;
//   product_picture_2: string | null;
//   queen_id: number;
//   queen_name: string;
//   rating: null | number;
//   stock_status: number;
//   short_desc: string;
// }
