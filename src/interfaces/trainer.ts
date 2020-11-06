export interface Trainer {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: TrainerRating;
}

export interface TrainerWithDetails extends Trainer {
  details: TrainerDetails;
}

export interface TrainerRating {
  value: number;
  reviews: number;
}

export interface TrainerDetails {
  qualifications: string;
  specialties: string[];
  contacts: TrainerContacts;
  locations: TrainerLocations;
  schedules: TrainerSchedule[];
}

export interface TrainerContacts {
  email: string;
  whatsapp: string;
}

export interface TrainerLocations {
  isAttendingOnline: boolean;
  isAttendingHome: boolean;
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

export enum Weekday {
  monday = 'monday',
  tuesday = 'tuesday',
  wednesday = 'wednesday',
  thursday = 'thursday',
  friday = 'friday',
  saturday = 'saturday',
  sunday = 'sunday',
}
