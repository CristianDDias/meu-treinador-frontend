import { useMutation, useQueryClient } from 'react-query';
import { api } from '../services/api';
import { Trainer } from '../interfaces/trainer';

interface Params {
  trainer: Trainer;
  isFavorite: boolean;
}

const putFavoriteTrainer = async (params: Params) => {
  await api.put(`customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`, {
    trainerId: params.trainer.id,
    isFavorite: params.isFavorite,
  });
};

export const useSetFavoriteTrainer = () => {
  const queryClient = useQueryClient();

  // React Query optimistic updates - https://react-query.tanstack.com/guides/optimistic-updates
  const { mutate, isLoading, isSuccess, isError } = useMutation({
    mutationFn: (params: Params) => putFavoriteTrainer(params),
    onMutate: async (params) => {
      await queryClient.cancelQueries('favorite-trainers');
      const snapshot = queryClient.getQueryData('favorite-trainers');
      queryClient.setQueryData('favorite-trainers', (data: any) =>
        params.isFavorite
          ? data?.concat(params.trainer)
          : data?.filter((trainer: any) => trainer.id !== params.trainer.id)
      );
      return snapshot;
    },
    onError: (_error, _params, context: any) => {
      queryClient.setQueryData('favorite-trainers', context.snapshot);
    },
    onSettled: () => {
      queryClient.invalidateQueries('favorite-trainers');
    },
  });

  return { setFavoriteTrainer: mutate, isLoading, isSuccess, isError };
};
