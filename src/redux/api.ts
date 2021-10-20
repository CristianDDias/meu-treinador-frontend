import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Trainer,
  TrainerDetails,
  TrainerFormAnswer,
  TrainerFormTemplate,
  TrainerRequest,
  TrainerReview,
} from '../interfaces/trainer';

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

type GetTrainerHiringFormTemplateRequest = {
  trainerId: string;
};

type GetTrainerHiringFormTemplateResponse = TrainerFormTemplate;

type GetTrainerRequestRequest = {
  trainerId: string;
};

type GetTrainerRequestResponse = TrainerRequest | undefined;

type CreateTrainerRequestRequest = {
  trainerId: string;
  form: TrainerFormAnswer[];
};

type CreateTrainerRequestResponse = void;

type AcceptTrainerRequestRequest = {
  trainerId: string;
};

type AcceptTrainerRequestResponse = void;

type DeclineTrainerRequestRequest = {
  trainerId: string;
};

type DeclineTrainerRequestResponse = void;

type GetFavoriteTrainersRequest = void;

type GetFavoriteTrainersResponse = Trainer[];

type UpdateFavoriteTrainersRequest = {
  trainer: Trainer;
  isFavorite: boolean;
};

type UpdateFavoriteTrainersResponse = void;

export const api = createApi({
  reducerPath: 'meuTreinadorApi',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
    prepareHeaders: (headers) => {
      headers.set('authorization', 'MEU-TREINADOR-TOKEN');
      return headers;
    },
  }),
  tagTypes: ['TrainerRequest'],
  endpoints: (builder) => ({
    getTrainers: builder.query<GetTrainersResponse, GetTrainersRequest>({
      query: (body) => ({
        url: '/trainers/list',
        method: 'POST',
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
    getTrainerHiringFormTemplate: builder.query<
      GetTrainerHiringFormTemplateResponse,
      GetTrainerHiringFormTemplateRequest
    >({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}/hiring-form-template`,
        method: 'GET',
      }),
    }),
    getTrainerRequest: builder.query<GetTrainerRequestResponse, GetTrainerRequestRequest>({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}/request/${process.env.REACT_APP_CUSTOMER_ID}`,
        method: 'GET',
      }),
      providesTags: ['TrainerRequest'],
    }),
    createTrainerRequest: builder.mutation<CreateTrainerRequestResponse, CreateTrainerRequestRequest>({
      query: ({ trainerId, form }) => ({
        url: `trainers/${trainerId}/request/${process.env.REACT_APP_CUSTOMER_ID}`,
        method: 'POST',
        body: { form },
      }),
      invalidatesTags: ['TrainerRequest'],
    }),
    acceptTrainerRequest: builder.mutation<AcceptTrainerRequestResponse, AcceptTrainerRequestRequest>({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}/request/${process.env.REACT_APP_CUSTOMER_ID}/accept`,
        method: 'PATCH',
      }),
      invalidatesTags: ['TrainerRequest'],
    }),
    declineTrainerRequest: builder.mutation<DeclineTrainerRequestResponse, DeclineTrainerRequestRequest>({
      query: ({ trainerId }) => ({
        url: `trainers/${trainerId}/request/${process.env.REACT_APP_CUSTOMER_ID}/decline`,
        method: 'PATCH',
      }),
      invalidatesTags: ['TrainerRequest'],
    }),
    getFavoriteTrainers: builder.query<GetFavoriteTrainersResponse, GetFavoriteTrainersRequest>({
      query: () => ({
        url: `customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`,
        method: 'GET',
      }),
    }),
    updateFavoriteTrainers: builder.mutation<UpdateFavoriteTrainersResponse, UpdateFavoriteTrainersRequest>({
      query: ({ trainer, isFavorite }) => ({
        url: `customers/${process.env.REACT_APP_CUSTOMER_ID}/favorite-trainers`,
        method: 'PATCH',
        body: { trainerId: trainer.id, isFavorite },
      }),
      onQueryStarted({ trainer, isFavorite }, { dispatch, queryFulfilled }) {
        const result = dispatch(
          api.util.updateQueryData('getFavoriteTrainers', undefined, (draft) => {
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
  useGetTrainerHiringFormTemplateQuery,
  useGetTrainerRequestQuery,
  useCreateTrainerRequestMutation,
  useAcceptTrainerRequestMutation,
  useDeclineTrainerRequestMutation,
  useGetFavoriteTrainersQuery,
  useUpdateFavoriteTrainersMutation,
} = api;
