import { useQuery } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

const getFavoriteTrainers = async () => {
  const { data } = await api.get<Trainer[]>(
    `customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`
  );
  return data;
};

export const useFavoriteTrainers = () => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: 'favorite-trainers',
    queryFn: () => getFavoriteTrainers(),
  });
  return { favoriteTrainers: data || [], isLoading, isSuccess, isError };
};
