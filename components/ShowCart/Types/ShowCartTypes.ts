export interface IshowCartProduct {
  product_picture_1: string;
  price: number;
  queen_name: string;
  queen_id: number;
  product_name: string;
  quantity: number;
  product_id: number;
}

export interface IshowCartProps {
  product: IshowCartProduct;
  deleteItem: (value: number) => void;
  setQueenId: (value: null | number) => void;
}
