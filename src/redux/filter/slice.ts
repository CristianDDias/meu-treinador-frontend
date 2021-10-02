import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FilterState {
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
}

const initialState: FilterState = {};

export const slice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (_, { payload }: PayloadAction<FilterState>) => {
      return payload;
    },
  },
});

export const { setFilter } = slice.actions;

export default slice.reducer;
