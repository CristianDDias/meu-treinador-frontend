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
  const { data, isLoading, isSuccess, isError } = useGetTrainersQuery({ filter });

  return (
    <Box sx={styles.container}>
      <TrainerSearchBar />

      <Box sx={styles.list}>
        {isSuccess && data?.results && data.results.length > 0 && <TrainerList trainers={data.results} />}

        {isSuccess && data?.results && data.results.length === 0 && (
          <Box sx={styles.indicator}>
            <Typography align="center">Nenhum Personal Trainer encontrado.</Typography>
          </Box>
        )}

        {isError && (
          <Box sx={styles.indicator}>
            <Typography align="center">Não foi possível carregar a lista de Personal Trainers.</Typography>
          </Box>
        )}

        {isLoading && (
          <Box sx={styles.indicator}>
            <CircularProgress color="primary" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
