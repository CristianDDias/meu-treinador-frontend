export interface Trainer {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: {
    value: number;
    reviews: number;
  };
  img: string;
}

export interface TrainerServiceLocation {
  id: string;
  city: string;
  state: string;
  places?: string[];
}
