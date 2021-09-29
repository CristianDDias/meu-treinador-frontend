import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

export interface TrainersFilters {
  name?: string;
  specialties?: string[];
  locations?: {
    cities?: { city: string; state: string }[];
    isProvidingOnlineService?: boolean;
    isProvidingInHomeService?: boolean;
  };
  schedules?: {
    weekdays?: string[];
    startTime?: string;
    endTime?: string;
  };
  rating?: {
    min?: number;
    max?: number;
  };
  price?: {
    min?: number;
    max?: number;
  };
  ethnicities?: string[];
  genders?: string[];
  paymentMethods?: string[];
}

const getTrainers = async (params?: TrainersFilters): Promise<Trainer[]> => {
  const { data } = await api.get<{ results: Trainer[] }>('trainers');
  return data.results;
};

export const useTrainers = (params?: TrainersFilters) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['trainers', params],
    queryFn: () => getTrainers(params),
  });
  return { trainers: data || [], isLoading, isSuccess, isError };
};
