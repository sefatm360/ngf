export interface IBanner {
  id: number;
  img: string;
}

export interface IBannerDataType {
  sliderBanner: {
    success: boolean;
    data: IBanner[];
  };
}
