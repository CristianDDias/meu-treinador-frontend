import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Trainer, TrainerDetails, TrainerReview } from '../interfaces/trainer';

type GetTrainersRequest = {
  pagination?: {
    page: number;
    limit: number;
  };
  filter: {
    name?: string;
    specialties?: string[];
    locations?: {
      cities?: { city: string; state: string }[];
      isProvidingOnlineService?: boolean;
      isProvidingInHomeService?: boolean;
    };
    schedules?: {
      weekdays?: string[];
      startTime?: string;
      endTime?: string;
    };
    rating?: {
      min?: number;
      max?: number;
    };
    price?: {
      min?: number;
      max?: number;
    };
    ethnicities?: string[];
    genders?: string[];
    paymentMethods?: string[];
  };
};

type GetTrainersResponse = {
  results: Trainer[];
  limit: number;
  page: number;
  totalPages: number;
};

type GetTrainerDetailsRequest = {
  trainerId: string;
};

type GetTrainerDetailsResponse = TrainerDetails;

type GetTrainerReviewsRequest = {
  trainerId: string;
};

type GetTrainerReviewsResponse = TrainerReview[];

type GetFavoriteTrainersRequest = Record<string, never>;

type GetFavoriteTrainersResponse = Trainer[];

type PatchFavoriteTrainersRequest = {
  trainer: Trainer;
  isFavorite: boolean;
};

type PatchFavoriteTrainersResponse = void;

export const api = createApi({
  reducerPath: 'meuTreinadorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', 'MEU-TREINADOR-TOKEN');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTrainers: builder.query<GetTrainersResponse, GetTrainersRequest>({
      query: (body) => ({
        url: '/trainers',
        method: 'PATCH',
        body,
      }),
    }),
    getTrainerDetails: builder.query<GetTrainerDetailsResponse, GetTrainerDetailsRequest>({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}`,
        method: 'GET',
      }),
    }),
    getTrainerReviews: builder.query<GetTrainerReviewsResponse, GetTrainerReviewsRequest>({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}/reviews`,
        method: 'GET',
      }),
    }),
    getFavoriteTrainers: builder.query<GetFavoriteTrainersResponse, GetFavoriteTrainersRequest>({
      query: () => ({
        url: `customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`,
        method: 'GET',
      }),
    }),
    patchFavoriteTrainers: builder.mutation<PatchFavoriteTrainersResponse, PatchFavoriteTrainersRequest>({
      query: ({ trainer, isFavorite }) => ({
        url: `customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`,
        method: 'PATCH',
        body: { trainerId: trainer.id, isFavorite },
      }),
      onQueryStarted({ trainer, isFavorite }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          api.util.updateQueryData('getFavoriteTrainers', {}, (draft) => {
            return isFavorite ? draft.concat(trainer) : draft.filter(({ id }) => id !== trainer.id);
          })
        );
        queryFulfilled.catch(result.undo);
      },
    }),
  }),
});

export const {
  useGetTrainersQuery,
  useGetTrainerDetailsQuery,
  useGetTrainerReviewsQuery,
  useGetFavoriteTrainersQuery,
  usePatchFavoriteTrainersMutation,
} = api;
