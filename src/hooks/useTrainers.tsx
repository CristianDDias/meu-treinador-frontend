import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

interface Params {
  name: string;
}

const getTrainers = async (params?: Params): Promise<Trainer[]> => {
  const { data } = await api.get<Trainer[]>('trainers', { params });
  return data;
};

export const useTrainers = (params?: Params) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['trainers', params],
    queryFn: () => getTrainers(params),
  });
  return { trainers: data || [], isLoading, isSuccess, isError };
};
