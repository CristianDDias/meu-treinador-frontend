import { useMutation, useQuery, queryCache } from 'react-query';
import { api } from '../services/api';
import { User } from '../interfaces/user';
import { Trainer } from '../interfaces/trainer';

// TODO: Ajustar para utilizar o ID do user, pois atualmente está hardcoded - 5f7674b15777701bce294dca

const QUERY_KEY = 'user';

const fetchUser = async (): Promise<User> => {
  const { data } = await api.get<User>('users/5f7674b15777701bce294dca');
  return data;
};

export const useUser = () => {
  const { data, isLoading, isSuccess, isError } = useQuery([QUERY_KEY], fetchUser);
  return { user: data as User, isLoading, isSuccess, isError };
};

interface UserFavoriteTrainerDto {
  trainer: Trainer;
  isFavorite: boolean;
}

export const useMutateUserFavoriteTrainer = () => {
  const [mutate] = useMutation(
    (userFavoriteTrainerDto: UserFavoriteTrainerDto) => {
      return api.put('users/5f7674b15777701bce294dca/favorite-trainer', {
        trainerId: userFavoriteTrainerDto.trainer.id,
        isFavorite: userFavoriteTrainerDto.isFavorite,
      });
    },
    {
      onMutate: ({ trainer, isFavorite }) => {
        // React Query optimistic update - https://react-query.tanstack.com/docs/guides/optimistic-updates
        queryCache.cancelQueries(QUERY_KEY);
        queryCache.setQueryData(QUERY_KEY, (data: any) => {
          return isFavorite
            ? {
                ...data,
                favoriteTrainers: [...data.favoriteTrainers, trainer],
              }
            : {
                ...data,
                favoriteTrainers: data.favoriteTrainers.filter(({ id }: any) => id !== trainer.id),
              };
        });
        const previousData = queryCache.getQueryData(QUERY_KEY);
        return () => queryCache.setQueryData(QUERY_KEY, previousData);
      },
    }
  );

  return mutate;
};
