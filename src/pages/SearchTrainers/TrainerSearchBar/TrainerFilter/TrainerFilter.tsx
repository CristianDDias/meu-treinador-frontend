import React, { useCallback, useEffect } from 'react';
import dayjs from 'dayjs';
import { Controller, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { SelectAutocomplete } from '../../../../components/SelectAutocomplete/SelectAutocomplete';
import { SelectAutocompleteVirtualized } from '../../../../components/SelectAutocomplete/SelectAutocompleteVirtualized';
import {
  cityOptions,
  ethnicityOptions,
  genderOptions,
  paymentMethodOptions,
  specialtyOptions,
  weekdayOptions,
} from './options';
import { FilterState } from '../../../../redux/filter/slice';

const Transition = React.forwardRef((props: any, ref: any) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

const TimePicker = (props: {
  label: string;
  ref: React.Ref<HTMLDivElement>;
  value: any;
  onAccept: (date: any) => void;
}) => {
  const { label, ...rest } = props;
  return (
    <MobileTimePicker
      {...rest}
      renderInput={(params) => <TextField {...params} fullWidth size="small" label={label} />}
      cancelText="Cancelar"
      okText="OK"
      toolbarTitle={null}
      ampm={false}
      ampmInClock={false}
      onChange={() => {}}
    />
  );
};

const toDate = (time: string): Date => {
  return dayjs(`2021-01-01 ${time}`, 'YYYY-MM-DD HH:mm').toDate();
};

const toString = (date: Date): string => {
  return dayjs(date).format('HH:mm');
};

const toFilterFields = (filterState: Omit<FilterState, 'name'>): FilterFields => {
  return {
    specialties: filterState.specialties || [],
    locations: {
      cities: filterState.locations?.cities ?? [],
      isProvidingOnlineService: filterState.locations?.isProvidingOnlineService || false,
      isProvidingInHomeService: filterState.locations?.isProvidingInHomeService || false,
    },
    schedules: {
      weekdays: filterState.schedules?.weekdays ?? [],
      startTime: toDate(filterState.schedules?.startTime ?? '00:00'),
      endTime: toDate(filterState.schedules?.endTime ?? '23:59'),
    },
    rating: {
      min: filterState.rating?.min?.toString() || '',
      max: filterState.rating?.max?.toString() || '',
    },
    price: {
      min: filterState.price?.min?.toString() || '',
      max: filterState.price?.max?.toString() || '',
    },
    ethnicities: filterState.ethnicities || [],
    genders: filterState.genders || [],
    paymentMethods: filterState.paymentMethods || [],
  };
};

const toFilterState = (filterFields: FilterFields): Omit<FilterState, 'name'> => {
  const filter: Omit<FilterState, 'name'> = {};
  if (filterFields.specialties.length) {
    filter.specialties = filterFields.specialties;
  }
  if (filterFields.locations.cities.length) {
    filter.locations = filter.locations ?? {};
    filter.locations.cities = filterFields.locations.cities;
  }
  if (filterFields.locations.isProvidingOnlineService) {
    filter.locations = filter.locations ?? {};
    filter.locations.isProvidingOnlineService = filterFields.locations.isProvidingOnlineService;
  }
  if (filterFields.locations.isProvidingInHomeService) {
    filter.locations = filter.locations ?? {};
    filter.locations.isProvidingInHomeService = filterFields.locations.isProvidingInHomeService;
  }
  if (filterFields.schedules.weekdays.length) {
    filter.schedules = filter.schedules ?? {};
    filter.schedules.weekdays = filterFields.schedules.weekdays;
  }
  if (filterFields.schedules.startTime) {
    const time = toString(filterFields.schedules.startTime);
    if (time !== '00:00') {
      filter.schedules = filter.schedules ?? {};
      filter.schedules.startTime = time;
    }
  }
  if (filterFields.schedules.endTime) {
    const time = toString(filterFields.schedules.endTime);
    if (time !== '23:59') {
      filter.schedules = filter.schedules ?? {};
      filter.schedules.endTime = time;
    }
  }
  if (filterFields.rating.min) {
    filter.rating = filter.rating ?? {};
    filter.rating.min = Number(filterFields.rating.min);
  }
  if (filterFields.rating.max) {
    filter.rating = filter.rating ?? {};
    filter.rating.max = Number(filterFields.rating.max);
  }
  if (filterFields.price.min) {
    filter.price = filter.price ?? {};
    filter.price.min = Number(filterFields.price.min);
  }
  if (filterFields.price.max) {
    filter.price = filter.price ?? {};
    filter.price.max = Number(filterFields.price.max);
  }
  if (filterFields.ethnicities.length) {
    filter.ethnicities = filterFields.ethnicities;
  }
  if (filterFields.genders.length) {
    filter.genders = filterFields.genders;
  }
  if (filterFields.paymentMethods.length) {
    filter.paymentMethods = filterFields.paymentMethods;
  }
  return filter;
};

interface FilterFields {
  specialties: string[];
  locations: {
    cities: { city: string; state: string }[];
    isProvidingOnlineService: boolean;
    isProvidingInHomeService: boolean;
  };
  schedules: {
    weekdays: string[];
    startTime: Date;
    endTime: Date;
  };
  rating: {
    min: string;
    max: string;
  };
  price: {
    min: string;
    max: string;
  };
  ethnicities: string[];
  genders: string[];
  paymentMethods: string[];
}

interface TrainerFilterProps {
  open: boolean;
  filter: Omit<FilterState, 'name'>;
  onFilter: (updatedFilter: Omit<FilterState, 'name'>) => void;
  onClose: () => void;
}

export const TrainerFilter: React.FC<TrainerFilterProps> = ({ open, filter, onFilter, onClose }) => {
  const { control, handleSubmit, setValue } = useForm({
    defaultValues: toFilterFields(filter),
  });

  const setValues = useCallback(
    (filterState: Omit<FilterState, 'name'>): void => {
      const filterFields = toFilterFields(filterState);
      setValue('specialties', filterFields.specialties);
      setValue('locations.cities', filterFields.locations.cities);
      setValue('locations.isProvidingOnlineService', filterFields.locations.isProvidingOnlineService);
      setValue('locations.isProvidingInHomeService', filterFields.locations.isProvidingInHomeService);
      setValue('schedules.weekdays', filterFields.schedules.weekdays);
      setValue('schedules.startTime', filterFields.schedules.startTime);
      setValue('schedules.endTime', filterFields.schedules.endTime);
      setValue('rating.min', filterFields.rating.min);
      setValue('rating.max', filterFields.rating.max);
      setValue('price.min', filterFields.price.min);
      setValue('price.max', filterFields.price.max);
      setValue('ethnicities', filterFields.ethnicities);
      setValue('genders', filterFields.genders);
      setValue('paymentMethods', filterFields.paymentMethods);
    },
    [setValue]
  );

  useEffect(() => {
    if (open) {
      setValues(filter);
    }
  }, [open, filter, setValues]);

  const shouldUseFullScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.only('xs'));

  const handleApply = (filterFields: FilterFields) => {
    onFilter(toFilterState(filterFields));
  };

  const handleClear = () => {
    setValues({});
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      fullScreen={shouldUseFullScreen}
      TransitionComponent={Transition}
      onClose={onClose}
    >
      <DialogTitle>
        Filtros
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(2),
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Stack spacing={2} divider={<Divider />}>
          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Especialidades
            </Typography>
            <Controller
              control={control}
              name="specialties"
              render={({ field }) => <SelectAutocomplete {...field} options={specialtyOptions} />}
            />
          </Stack>

          <Stack spacing={2} alignItems="flex-start">
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Locais
            </Typography>
            <Controller
              control={control}
              name="locations.cities"
              render={({ field }) => (
                <SelectAutocompleteVirtualized
                  {...field}
                  options={cityOptions}
                  groupBy={(option) => option.state}
                  getOptionLabel={(option) => `${option.city} - ${option.state}`}
                  getOptionLabelList={(option) => option.city}
                />
              )}
            />
            <FormGroup row>
              <Controller
                control={control}
                name="locations.isProvidingOnlineService"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Online / Remoto"
                    ref={field.ref}
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="locations.isProvidingInHomeService"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Domicílio"
                    ref={field.ref}
                    checked={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </FormGroup>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Horários
            </Typography>
            <Controller
              control={control}
              name="schedules.weekdays"
              render={({ field }) => <SelectAutocomplete {...field} options={weekdayOptions} />}
            />
            <Stack spacing={2} direction="row">
              <Controller
                control={control}
                name="schedules.startTime"
                render={({ field }) => (
                  <TimePicker label="Inicial" ref={field.ref} value={field.value} onAccept={field.onChange} />
                )}
              />
              <Controller
                control={control}
                name="schedules.endTime"
                render={({ field }) => (
                  <TimePicker label="Final" ref={field.ref} value={field.value} onAccept={field.onChange} />
                )}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Avaliação
            </Typography>
            <Stack spacing={2} direction="row">
              <Controller
                control={control}
                name="rating.min"
                render={({ field }) => (
                  <TextField {...field} fullWidth size="small" type="number" label="Mínima" />
                )}
              />
              <Controller
                control={control}
                name="rating.max"
                render={({ field }) => (
                  <TextField {...field} fullWidth size="small" type="number" label="Máxima" />
                )}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Preço
            </Typography>
            <Stack spacing={2} direction="row">
              <Controller
                control={control}
                name="price.min"
                render={({ field }) => (
                  <TextField {...field} fullWidth size="small" type="number" label="Mínimo" />
                )}
              />
              <Controller
                control={control}
                name="price.max"
                render={({ field }) => (
                  <TextField {...field} fullWidth size="small" type="number" label="Máximo" />
                )}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Etnias
            </Typography>
            <Controller
              control={control}
              name="ethnicities"
              render={({ field }) => <SelectAutocomplete {...field} options={ethnicityOptions} />}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Gêneros
            </Typography>
            <Controller
              control={control}
              name="genders"
              render={({ field }) => <SelectAutocomplete {...field} options={genderOptions} />}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Formas de pagamento
            </Typography>
            <Controller
              control={control}
              name="paymentMethods"
              render={({ field }) => <SelectAutocomplete {...field} options={paymentMethodOptions} />}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClear}>
          Limpar
        </Button>
        <Button variant="contained" onClick={handleSubmit(handleApply)}>
          Aplicar filtros
        </Button>
      </DialogActions>
    </Dialog>
  );
};
