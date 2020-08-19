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

export type TrainerServiceSchedules = {
  [day in 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday']?: {
    startTime: string;
    endTime: string;
  };
};
