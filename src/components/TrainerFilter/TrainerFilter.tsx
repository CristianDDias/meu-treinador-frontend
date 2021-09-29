import React, { useState } from 'react';
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
import { SelectAutocomplete } from '../SelectAutocomplete/SelectAutocomplete';
import { SelectAutocompleteVirtualized } from '../SelectAutocomplete/SelectAutocompleteVirtualized';
import {
  cityOptions,
  ethnicityOptions,
  genderOptions,
  paymentMethodOptions,
  specialtyOptions,
  weekdayOptions,
} from './options';
import { TrainersFilters } from '../../hooks/useTrainers';

const Transition = React.forwardRef((props: any, ref: any) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TrainerFilterProps {
  open: boolean;
  onFilter: (filters?: Omit<TrainersFilters, 'name'>) => void;
  onClose: () => void;
}

// #TODO: Melhorar organização dos componentes de filtros
//        - SearchTrainers, SearchBar, TrainerFilter

export const TrainerFilter: React.FC<TrainerFilterProps> = ({ open, onFilter, onClose }) => {
  const [filters, setFilters] = useState<Omit<TrainersFilters, 'name'>>();

  const shouldUseFullScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.only('xs'));

  const handleApply = () => {
    const usedFilters: TrainersFilters = {};
    if (filters?.specialties?.length) {
      usedFilters.specialties = filters.specialties;
    }
    if (filters?.locations?.cities?.length) {
      usedFilters.locations = usedFilters.locations ?? {};
      usedFilters.locations.cities = filters.locations.cities;
    }
    if (filters?.locations?.isProvidingOnlineService) {
      usedFilters.locations = usedFilters.locations ?? {};
      usedFilters.locations.isProvidingOnlineService = filters.locations.isProvidingOnlineService;
    }
    if (filters?.locations?.isProvidingInHomeService) {
      usedFilters.locations = usedFilters.locations ?? {};
      usedFilters.locations.isProvidingInHomeService = filters.locations.isProvidingInHomeService;
    }
    if (filters?.schedules?.weekdays?.length) {
      usedFilters.schedules = usedFilters.schedules ?? {};
      usedFilters.schedules.weekdays = filters.schedules.weekdays;
    }
    if (filters?.schedules?.startTime) {
      usedFilters.schedules = usedFilters.schedules ?? {};
      usedFilters.schedules.startTime = filters.schedules.startTime;
    }
    if (filters?.schedules?.endTime) {
      usedFilters.schedules = usedFilters.schedules ?? {};
      usedFilters.schedules.endTime = filters.schedules.endTime;
    }
    if (filters?.rating?.min) {
      usedFilters.rating = usedFilters.rating ?? {};
      usedFilters.rating.min = filters.rating.min;
    }
    if (filters?.rating?.max) {
      usedFilters.rating = usedFilters.rating ?? {};
      usedFilters.rating.max = filters.rating.max;
    }
    if (filters?.price?.min) {
      usedFilters.price = usedFilters.price ?? {};
      usedFilters.price.min = filters.price.min;
    }
    if (filters?.price?.max) {
      usedFilters.price = usedFilters.price ?? {};
      usedFilters.price.max = filters.price.max;
    }
    if (filters?.ethnicities?.length) {
      usedFilters.ethnicities = filters.ethnicities;
    }
    if (filters?.genders?.length) {
      usedFilters.genders = filters.genders;
    }
    if (filters?.paymentMethods?.length) {
      usedFilters.paymentMethods = filters.paymentMethods;
    }
    onFilter(usedFilters);
  };

  const handleClean = () => {
    setFilters(undefined);
  };

  const handleChangeSpecialties = (value: string[]) => {
    setFilters((state) => ({ ...state, specialties: value }));
  };

  const handleChangeCities = (value: { city: string; state: string }[]) => {
    setFilters((state) => ({ ...state, locations: { ...state?.locations, cities: value } }));
  };

  const handleChangeIsProvidingOnlineService = (_: any, value: boolean) => {
    setFilters((state) => ({
      ...state,
      locations: { ...state?.locations, isProvidingOnlineService: value },
    }));
  };

  const handleChangeIsProvidingInHomeService = (_: any, value: boolean) => {
    setFilters((state) => ({
      ...state,
      locations: { ...state?.locations, isProvidingInHomeService: value },
    }));
  };

  const handleChangeWeekdays = (value: string[]) => {
    setFilters((state) => ({ ...state, schedules: { ...state?.schedules, weekdays: value } }));
  };

  const handleChangeStartTime = (value: any) => {
    setFilters((state) => ({ ...state, schedules: { ...state?.schedules, startTime: value } }));
  };

  const handleChangeEndTime = (value: any) => {
    setFilters((state) => ({ ...state, schedules: { ...state?.schedules, endTime: value } }));
  };

  const handleChangeRatingMin = (value: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => ({ ...state, rating: { ...state?.rating, min: Number(value.target.value) } }));
  };

  const handleChangeRatingMax = (value: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => ({ ...state, rating: { ...state?.rating, max: Number(value.target.value) } }));
  };

  const handleChangePriceMin = (value: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => ({ ...state, price: { ...state?.price, min: Number(value.target.value) } }));
  };

  const handleChangePriceMax = (value: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => ({ ...state, price: { ...state?.price, max: Number(value.target.value) } }));
  };

  const handleChangeEthnicities = (value: string[]) => {
    setFilters((state) => ({ ...state, ethnicities: value }));
  };

  const handleChangeGenders = (value: string[]) => {
    setFilters((state) => ({ ...state, genders: value }));
  };

  const handleChangePaymentMethods = (value: string[]) => {
    setFilters((state) => ({ ...state, paymentMethods: value }));
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
              value={filters?.specialties || []}
              onChange={handleChangeSpecialties}
            />
          </Stack>

          <Stack spacing={2} alignItems="flex-start">
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Locais
            </Typography>
            <SelectAutocompleteVirtualized
              options={cityOptions}
              value={filters?.locations?.cities || []}
              onChange={handleChangeCities}
              groupBy={(option) => option.state}
              getOptionLabel={(option) => `${option.city} - ${option.state}`}
              getOptionLabelList={(option) => option.city}
            />
            <FormGroup row>
              <FormControlLabel
                control={<Checkbox />}
                label="Online / Remoto"
                checked={filters?.locations?.isProvidingOnlineService || false}
                onChange={handleChangeIsProvidingOnlineService}
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Domicílio"
                checked={filters?.locations?.isProvidingInHomeService || false}
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
              value={filters?.schedules?.weekdays || []}
              onChange={handleChangeWeekdays}
            />
            <Stack spacing={2} direction="row">
              <TimePicker
                renderInput={(params) => <TextField {...params} fullWidth size="small" label="Mínimo" />}
                ampm={false}
                ampmInClock={false}
                value={filters?.schedules?.startTime || null}
                onChange={handleChangeStartTime}
              />
              <TimePicker
                renderInput={(params) => <TextField {...params} fullWidth size="small" label="Máximo" />}
                ampm={false}
                ampmInClock={false}
                value={filters?.schedules?.endTime || null}
                onChange={handleChangeEndTime}
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
                value={filters?.rating?.min || ''}
                onChange={handleChangeRatingMin}
              />
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Máxima"
                value={filters?.rating?.max || ''}
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
                value={filters?.price?.min || ''}
                onChange={handleChangePriceMin}
              />
              <TextField
                fullWidth
                size="small"
                type="number"
                label="Máximo"
                value={filters?.price?.max || ''}
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
              value={filters?.ethnicities || []}
              onChange={handleChangeEthnicities}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Gêneros
            </Typography>
            <SelectAutocomplete
              options={genderOptions}
              value={filters?.genders || []}
              onChange={handleChangeGenders}
            />
          </Stack>

          <Stack spacing={2}>
            <Typography component="legend" fontWeight={(theme) => theme.typography.fontWeightMedium}>
              Formas de pagamento
            </Typography>
            <SelectAutocomplete
              options={paymentMethodOptions}
              value={filters?.paymentMethods || []}
              onChange={handleChangePaymentMethods}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={handleClean}>
          Limpar
        </Button>
        <Button variant="contained" onClick={handleApply}>
          Aplicar filtros
        </Button>
      </DialogActions>
    </Dialog>
  );
};
