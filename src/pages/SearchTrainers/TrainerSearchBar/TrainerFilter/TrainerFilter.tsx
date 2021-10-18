import React, { useEffect, useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
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
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import TimePicker from '@mui/lab/TimePicker';
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

const toDate = (time: string): Dayjs => {
  return dayjs(`2021-01-01 ${time}`, 'YYYY-MM-DD HH:mm');
};

const toString = (date: Dayjs): string => {
  return date.format('HH:mm');
};

const toFields = (filter: Omit<FilterState, 'name'>): FilterFields => {
  return {
    specialties: filter.specialties || [],
    locations: {
      cities: filter.locations?.cities ?? [],
      isProvidingOnlineService: filter.locations?.isProvidingOnlineService || false,
      isProvidingInHomeService: filter.locations?.isProvidingInHomeService || false,
    },
    schedules: {
      weekdays: filter.schedules?.weekdays ?? [],
      startTime: toDate(filter.schedules?.startTime ?? '00:00'),
      endTime: toDate(filter.schedules?.endTime ?? '23:59'),
    },
    rating: {
      min: filter.rating?.min?.toString() || '',
      max: filter.rating?.max?.toString() || '',
    },
    price: {
      min: filter.price?.min?.toString() || '',
      max: filter.price?.max?.toString() || '',
    },
    ethnicities: filter.ethnicities || [],
    genders: filter.genders || [],
    paymentMethods: filter.paymentMethods || [],
  };
};

const toFilter = (fields: FilterFields): Omit<FilterState, 'name'> => {
  const filter: Omit<FilterState, 'name'> = {};
  if (fields.specialties.length) {
    filter.specialties = fields.specialties;
  }
  if (fields.locations.cities.length) {
    filter.locations = filter.locations ?? {};
    filter.locations.cities = fields.locations.cities;
  }
  if (fields.locations.isProvidingOnlineService) {
    filter.locations = filter.locations ?? {};
    filter.locations.isProvidingOnlineService = fields.locations.isProvidingOnlineService;
  }
  if (fields.locations.isProvidingInHomeService) {
    filter.locations = filter.locations ?? {};
    filter.locations.isProvidingInHomeService = fields.locations.isProvidingInHomeService;
  }
  if (fields.schedules.weekdays.length) {
    filter.schedules = filter.schedules ?? {};
    filter.schedules.weekdays = fields.schedules.weekdays;
  }
  if (fields.schedules.startTime) {
    const time = toString(fields.schedules.startTime);
    if (time !== '00:00') {
      filter.schedules = filter.schedules ?? {};
      filter.schedules.startTime = time;
    }
  }
  if (fields.schedules.endTime) {
    const time = toString(fields.schedules.endTime);
    if (time !== '23:59') {
      filter.schedules = filter.schedules ?? {};
      filter.schedules.endTime = time;
    }
  }
  if (fields.rating.min) {
    filter.rating = filter.rating ?? {};
    filter.rating.min = Number(fields.rating.min);
  }
  if (fields.rating.max) {
    filter.rating = filter.rating ?? {};
    filter.rating.max = Number(fields.rating.max);
  }
  if (fields.price.min) {
    filter.price = filter.price ?? {};
    filter.price.min = Number(fields.price.min);
  }
  if (fields.price.max) {
    filter.price = filter.price ?? {};
    filter.price.max = Number(fields.price.max);
  }
  if (fields.ethnicities.length) {
    filter.ethnicities = fields.ethnicities;
  }
  if (fields.genders.length) {
    filter.genders = fields.genders;
  }
  if (fields.paymentMethods.length) {
    filter.paymentMethods = fields.paymentMethods;
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
    startTime: Dayjs | null;
    endTime: Dayjs | null;
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

// #TODO: Aplicar https://react-hook-form.com/ para controlar formulário
//        - Ver TrainerHiringForm.tsx

export const TrainerFilter: React.FC<TrainerFilterProps> = ({ open, filter, onFilter, onClose }) => {
  const [localFilter, setLocalFilter] = useState<FilterFields>(toFields(filter));

  useEffect(() => {
    if (open) {
      setLocalFilter(toFields(filter));
    }
  }, [open, filter]);

  const shouldUseFullScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.only('xs'));

  const handleApply = () => {
    onFilter(toFilter(localFilter));
  };

  const handleClear = () => {
    setLocalFilter(toFields({}));
  };

  const handleChangeSpecialties = (value: string[]) => {
    setLocalFilter((state) => ({ ...state, specialties: value }));
  };

  const handleChangeCities = (value: { city: string; state: string }[]) => {
    setLocalFilter((state) => ({ ...state, locations: { ...state.locations, cities: value } }));
  };

  const handleChangeIsProvidingOnlineService = (_: any, value: boolean) => {
    setLocalFilter((state) => ({
      ...state,
      locations: { ...state.locations, isProvidingOnlineService: value },
    }));
  };

  const handleChangeIsProvidingInHomeService = (_: any, value: boolean) => {
    setLocalFilter((state) => ({
      ...state,
      locations: { ...state.locations, isProvidingInHomeService: value },
    }));
  };

  const handleChangeWeekdays = (value: string[]) => {
    setLocalFilter((state) => ({ ...state, schedules: { ...state.schedules, weekdays: value } }));
  };

  const handleChangeStartTime = (value: Dayjs | null) => {
    setLocalFilter((state) => ({ ...state, schedules: { ...state.schedules, startTime: value } }));
  };

  const handleChangeEndTime = (value: Dayjs | null) => {
    setLocalFilter((state) => ({ ...state, schedules: { ...state.schedules, endTime: value } }));
  };

  const handleChangeRatingMin = (value: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter((state) => ({ ...state, rating: { ...state.rating, min: value.target.value } }));
  };

  const handleChangeRatingMax = (value: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter((state) => ({ ...state, rating: { ...state.rating, max: value.target.value } }));
  };

  const handleChangePriceMin = (value: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter((state) => ({ ...state, price: { ...state.price, min: value.target.value } }));
  };

  const handleChangePriceMax = (value: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter((state) => ({ ...state, price: { ...state.price, max: value.target.value } }));
  };

  const handleChangeEthnicities = (value: string[]) => {
    setLocalFilter((state) => ({ ...state, ethnicities: value }));
  };

  const handleChangeGenders = (value: string[]) => {
    setLocalFilter((state) => ({ ...state, genders: value }));
  };

  const handleChangePaymentMethods = (value: string[]) => {
    setLocalFilter((state) => ({ ...state, paymentMethods: value }));
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
            <SelectAutocomplete
              options={specialtyOptions}
              value={localFilter.specialties}
              onChange={handleChangeSpecialties}
            />
          </Stack>

          <Stack spacing={2} alignItems="flex-start">
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Locais
            </Typography>
            <SelectAutocompleteVirtualized
              options={cityOptions}
              value={localFilter.locations.cities}
              onChange={handleChangeCities}
              groupBy={(option) => option.state}
              getOptionLabel={(option) => `${option.city} - ${option.state}`}
              getOptionLabelList={(option) => option.city}
            />
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox />}
                label="Online / Remoto"
                checked={localFilter.locations.isProvidingOnlineService}
                onChange={handleChangeIsProvidingOnlineService}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Domicílio"
                checked={localFilter.locations.isProvidingInHomeService}
                onChange={handleChangeIsProvidingInHomeService}
              />
            </FormGroup>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Horários
            </Typography>
            <SelectAutocomplete
              options={weekdayOptions}
              value={localFilter.schedules.weekdays}
              onChange={handleChangeWeekdays}
            />
            <Stack spacing={2} direction="row">
              <TimePicker
                renderInput={(params) => <TextField {...params} fullWidth size="small" label="Inicial" />}
                cancelText="Cancelar"
                okText="OK"
                toolbarTitle="Horário inicial"
                ampm={false}
                ampmInClock={false}
                value={localFilter.schedules.startTime}
                onAccept={handleChangeStartTime}
                onChange={() => {}}
              />
              <TimePicker
                renderInput={(params) => <TextField {...params} fullWidth size="small" label="Final" />}
                cancelText="Cancelar"
                okText="OK"
                toolbarTitle="Horário final"
                ampm={false}
                ampmInClock={false}
                value={localFilter.schedules.endTime}
                onAccept={handleChangeEndTime}
                onChange={() => {}}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Avaliação
            </Typography>
            <Stack spacing={2} direction="row">
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Mínima"
                value={localFilter.rating.min}
                onChange={handleChangeRatingMin}
              />
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Máxima"
                value={localFilter.rating.max}
                onChange={handleChangeRatingMax}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Preço
            </Typography>
            <Stack spacing={2} direction="row">
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Mínimo"
                value={localFilter.price.min}
                onChange={handleChangePriceMin}
              />
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Máximo"
                value={localFilter.price.max}
                onChange={handleChangePriceMax}
              />
            </Stack>
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Etnias
            </Typography>
            <SelectAutocomplete
              options={ethnicityOptions}
              value={localFilter.ethnicities}
              onChange={handleChangeEthnicities}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Gêneros
            </Typography>
            <SelectAutocomplete
              options={genderOptions}
              value={localFilter.genders}
              onChange={handleChangeGenders}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Formas de pagamento
            </Typography>
            <SelectAutocomplete
              options={paymentMethodOptions}
              value={localFilter.paymentMethods}
              onChange={handleChangePaymentMethods}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClear}>
          Limpar
        </Button>
        <Button variant="contained" onClick={handleApply}>
          Aplicar filtros
        </Button>
      </DialogActions>
    </Dialog>
  );
};
