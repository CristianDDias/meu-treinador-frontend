import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useGetFavoriteTrainersQuery } from '../../redux/api';
import { styles } from './FavoriteTrainers.jss';

export const FavoriteTrainers: React.FC = () => {
  const { data = [], isLoading, isSuccess, isError } = useGetFavoriteTrainersQuery();

  return (
    <Box sx={styles.container}>
      <Typography sx={styles.label}>Favoritos ({isSuccess ? data.length : 0})</Typography>

      <Box sx={styles.list}>
        {isSuccess && data.length > 0 && <TrainerList trainers={data} />}

        {isSuccess && data.length === 0 && (
          <Box sx={styles.indicator}>
            <Typography align="center">Você não possui Personal Trainers favoritos.</Typography>
          </Box>
        )}

        {isError && (
          <Box sx={styles.indicator}>
            <Typography align="center">
              Não foi possível carregar a lista de Personal Trainers favoritos.
            </Typography>
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
