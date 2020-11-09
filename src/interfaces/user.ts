import { Trainer } from './trainer';

export interface User {
  id: string;
  name: string;
  favoriteTrainers: Trainer[];
}
