export interface Trainer {
  id: string;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: {
    value: number;
    reviews: number;
  };
  contact: {
    email: string;
    whatsapp: string;
  };
  isFavorite: boolean;
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

export interface TrainerReview {
  id: string;
  name: string;
  rating: number;
  description: string;
}
