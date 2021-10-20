import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { TrainerSearchBar } from './TrainerSearchBar/TrainerSearchBar';
import { styles } from './SearchTrainers.jss';
import { useAppSelector } from '../../redux/hooks';
import { useGetTrainersQuery } from '../../redux/api';

export const SearchTrainers: React.FC = () => {
  const filter = useAppSelector((state) => state.filter);
  const { data, isFetching, isSuccess, isError } = useGetTrainersQuery({ filter });

  return (
    <Box sx={styles.container}>
      <TrainerSearchBar />

      {!isFetching && isSuccess && data?.results && data.results.length > 0 && (
        <Box sx={styles.list}>
          <TrainerList trainers={data.results} />
        </Box>
      )}

      {!isFetching && isSuccess && data?.results && data.results.length === 0 && (
        <Box sx={styles.indicator}>
          <Typography align="center">Nenhum Personal Trainer encontrado.</Typography>
        </Box>
      )}

      {!isFetching && isError && (
        <Box sx={styles.indicator}>
          <Typography align="center">Não foi possível carregar a lista de Personal Trainers.</Typography>
        </Box>
      )}

      {isFetching && (
        <Box sx={styles.indicator}>
          <CircularProgress color="primary" />
        </Box>
      )}
    </Box>
  );
};
