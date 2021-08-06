import { useQuery } from 'react-query';
import { api } from '../services/api';
import { TrainerReview } from '../interfaces/trainer';

const getTrainerReviews = async (trainerId: string): Promise<TrainerReview[]> => {
  const { data } = await api.get<TrainerReview[]>(`trainers/${trainerId}/reviews`);
  return data;
};

export const useTrainerReviews = (trainerId: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['trainer-reviews', trainerId],
    queryFn: () => getTrainerReviews(trainerId),
  });
  return { reviews: data || [], isLoading, isSuccess, isError };
};
