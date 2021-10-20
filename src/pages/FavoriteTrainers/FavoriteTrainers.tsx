import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useGetFavoriteTrainersQuery } from '../../redux/api';
import { styles } from './FavoriteTrainers.jss';

export const FavoriteTrainers: React.FC = () => {
  const { data = [], isFetching, isSuccess, isError } = useGetFavoriteTrainersQuery();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.label}>Favoritos ({isSuccess ? data.length : 0})</Typography>

      {!isFetching && isSuccess && data.length > 0 && (
        <Box sx={styles.list}>
          <TrainerList trainers={data} />
        </Box>
      )}

      {!isFetching && isSuccess && data.length === 0 && (
        <Box sx={styles.indicator}>
          <Typography align="center">Você não possui favoritos.</Typography>
        </Box>
      )}

      {!isFetching && isError && (
        <Box sx={styles.indicator}>
          <Typography align="center">Não foi possível carregar a lista de favoritos.</Typography>
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
