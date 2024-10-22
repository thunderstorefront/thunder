export type Review = {
  averageRating: number;
  summary: string;
  text: string;
  nickname: string;
  createdAt: string;
};

export type RatingValue = {
  id: string;
  value: string;
};

export type Rating = {
  id: string;
  name: string;
  values: RatingValue[];
};
