import { useQuery } from 'react-query';
import { api } from '../services/api';
import { TrainerWithDetails } from '../interfaces/trainer';

const fetchTrainerDetails = async (trainerId: string): Promise<TrainerWithDetails> => {
  const { data } = await api.get<TrainerWithDetails>(`trainers/${trainerId}?details=true`);
  return data;
};

export const useTrainerDetails = (trainerId: string) => {
  const { data, isLoading, isSuccess, isError } = useQuery(['trainer-details', trainerId], () =>
    fetchTrainerDetails(trainerId)
  );
  return { trainer: data as TrainerWithDetails, isLoading, isSuccess, isError };
};
