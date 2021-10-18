export interface Trainer {
  id: string;
  name: string;
  description: string;
  image: string;
  rating?: TrainerRating;
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
  weekday: string;
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

export interface TrainerRequest {
  id: string;
  trainerId: string;
  customerId: string;
  status: TrainerRequestStatus;
  form: TrainerFormAnswer[];
}

export interface TrainerFormTemplate {
  id: string;
  trainerId: string;
  name: string;
  form: TrainerFormQuestion[];
}

export type TrainerFormQuestion =
  | {
      type: QuestionType.MultipleChoice;
      question: string;
      options: string[];
    }
  | {
      type: QuestionType.SingleChoice;
      question: string;
      options: string[];
    }
  | {
      type: QuestionType.Text;
      question: string;
      options: undefined;
    };

export type TrainerFormAnswer =
  | {
      type: QuestionType.MultipleChoice;
      question: string;
      answer: string[];
      options: string[];
    }
  | {
      type: QuestionType.SingleChoice;
      question: string;
      answer: string;
      options: string[];
    }
  | {
      type: QuestionType.Text;
      question: string;
      answer: string;
      options: undefined;
    };

export enum TrainerRequestStatus {
  Pending = 'pending',
  Accepted = 'accepted',
  Declined = 'declined',
}

export enum QuestionType {
  SingleChoice = 'single-choice',
  MultipleChoice = 'multiple-choice',
  Text = 'text',
}
