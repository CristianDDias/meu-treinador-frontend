import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

const fetchTrainers = async (): Promise<Trainer[]> => {
  const { data } = await api.get<Trainer[]>(`trainers`);
  return data;
};

export const useTrainers = () => {
  const { data, isLoading, isSuccess, isError } = useQuery(['trainers'], fetchTrainers);
  return { trainers: data || [], isLoading, isSuccess, isError };
};
