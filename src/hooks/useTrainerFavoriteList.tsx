import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

const fetchTrainerFavoriteList = async (): Promise<Trainer[]> => {
  // TODO: Aplicar endpoint de favoritos
  const { data } = await api.get<Trainer[]>(`trainers`);
  return data.slice(0, 2);
};

export const useTrainerFavoriteList = () => {
  const { data, isLoading, isSuccess, isError } = useQuery(
    ['trainer-favorite-list'],
    fetchTrainerFavoriteList
  );
  return { trainers: data || [], isLoading, isSuccess, isError };
};
