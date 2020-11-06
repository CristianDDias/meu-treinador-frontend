import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

const fetchTrainerList = async (): Promise<Trainer[]> => {
  const { data } = await api.get<Trainer[]>(`trainers`);
  return data;
};

export const useTrainerList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery(['trainer-list'], fetchTrainerList);
  return { trainers: data || [], isLoading, isSuccess, isError };
};
