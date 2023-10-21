export interface IOrderProduct {
  order_id: number;
  delivery_address: string;
  total_payment: number;
  order_date: string;
  canceled: number;
  delivered: number;
  status: string;
  price: number;
  product_categoru: string;
  product_id: number;
  product_name: string;
  product_picture: string;
  quantity: number;
}

export interface IprofileOrder {
  order_id: number;
  delivery_address: string;
  order_date: string;
  price: number;
  canceled: number;
  delivered: number;
  status: string;
}
export interface Iorderss {
  order_id: number;
  delivery_address: string;
  total_payment: number;
  order_date: string;
  canceled: number;
  delivered: number;
  status: string;
  products: IOrderProduct[];
}

// my review

export interface ImyReview {
  date: string;
  comment: string;
  id: number;
  product: string;
  product_id: string;
  rating: string;
  rating_pic1: string;
  rating_pic2: string;
  rating_pic3: string;
}

// question answer

export interface IallQuestion {
  answer: string;
  id: number;
  product: string;
  product_name: string;
  question: string;
  question_date: string;
}

// post product review modal

export interface Iratingpic {
  ratingPic1: Blob | null;
  ratingPic2: Blob | null;
  ratingPic3: Blob | null;
}
