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
