export interface Trainer {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: TrainerRating;
}

export interface TrainerDetails extends Trainer {
  qualifications: string;
  specialties: string[];
  contacts: TrainerContacts;
  locations: TrainerLocations;
  schedules: TrainerSchedule[];
}

export interface TrainerRating {
  value: number;
  reviews: number;
}

export interface TrainerContacts {
  email: string;
  phone: string;
}

export interface TrainerLocations {
  isProvidingOnlineService: boolean;
  isProvidingInHomeService: boolean;
  cities: TrainerCity[];
}

export interface TrainerCity {
  city: string;
  state: string;
  places: string[];
}

export interface TrainerSchedule {
  weekday: Weekday;
  startTime: string;
  endTime: string;
}

export interface TrainerReview {
  id: string;
  author: string;
  rating: number;
  description: string;
  createdAt: Date;
}

export type Weekday = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';
