import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

interface TrainersParams {
  name: string;
}

const fetchTrainers = async (params?: TrainersParams): Promise<Trainer[]> => {
  const { data } = await api.get<Trainer[]>(`trainers`, { params });
  return data;
};

export const useTrainers = (params?: TrainersParams) => {
  const { data, isLoading, isSuccess, isError } = useQuery(['trainers', params], () =>
    fetchTrainers(params)
  );
  return { trainers: data || [], isLoading, isSuccess, isError };
};
