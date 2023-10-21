export interface IproductCategories {
  id: number;
  categoryName: string;
  name: string;
  banner: string;
  route: string;
}
export interface dealProps {
  banner: string;
  categoryName: string;
  id: number;
  name: string;
  route: string;
}

export interface InewData {
  id: number;
  price: string;
  product_name: string;
  product_picture_1: string;
  queen_id: number;
  queen_name: string;
  rating: null;
  stock_status: number;
}

export interface InewBanner {
  id: number;
  img: string;
}
export interface IcategoryProps {
  category: {
    deal: dealProps;
    banner: string;
    data: InewData[];
  };
}
