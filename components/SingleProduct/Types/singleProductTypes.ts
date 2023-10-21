import { IsingleProduct } from '../../../PageTypes/product/productTypes';

export interface IaskingProductProps {
  productId: number;
}

export interface IsingleProductProps {
  singleProduct: IsingleProduct;
}
export interface IsingleProductAllRating {
  comment: string;
  date: string;
  id: number;
  rater_name: string;
  rating: number;
  rating_pic1: string;
  rating_pic2: null | string;
  rating_pic3: null | string;
}
export interface Iquestions {
  customer_name?: string;
  question?: string;
  answer?: string | null;
  id?: number;
  question_date?: string;
}
