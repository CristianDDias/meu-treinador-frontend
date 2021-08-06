import { useQuery } from 'react-query';
import { api } from '../services/api';
import { TrainerDetails } from '../interfaces/trainer';

const getTrainerDetails = async (trainerId: string): Promise<TrainerDetails> => {
  const { data } = await api.get<TrainerDetails>(`trainers/${trainerId}`);
  return data;
};

export const useTrainerDetails = (trainerId: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery({
    queryKey: ['trainer-details', trainerId],
    queryFn: () => getTrainerDetails(trainerId),
  });
  return { trainer: data as TrainerDetails, isLoading, isSuccess, isError };
};
