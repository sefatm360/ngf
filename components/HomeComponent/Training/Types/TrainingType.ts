export interface Itraining {
  training_date: string;
  trainer_name: string;
  trainer_dp: string;
  status: string;
  institute: string;
  id: number;
  title: string;
  thumbnail: string;
  details: string;
}

export interface IshowCoursProps {
  course: Itraining;
}

export interface ItrainingRes<T> {
  success: boolean;
  data?: T;
}
