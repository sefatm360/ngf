export interface Iqueens {
  id: number;
  name: string;
  photo: string;
}

export interface IqueensProps {
  data: {
    success: boolean;
    data: Iqueens[];
    total: number;
  };
}
