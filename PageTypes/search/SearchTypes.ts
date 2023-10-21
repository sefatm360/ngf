export interface IsearchProducts {
  id: number;
  product_name: string;
  product_picture_1: string;
  price: number;
  stock_status: number;
}
export interface IsearchPageProps {
  data: {
    success: boolean;
    data: IsearchProducts[];
  };
}
