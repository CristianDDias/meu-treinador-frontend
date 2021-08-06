import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useFavoriteTrainers } from '../../hooks/useFavoriteTrainers';
import { useStyles } from './FavoriteTrainers.jss';

export const FavoriteTrainers: React.FC = () => {
  const classes = useStyles();
  const { favoriteTrainers, isLoading, isSuccess, isError } = useFavoriteTrainers();

  return (
    <div className={classes.container}>
      <Typography className={classes.label}>Favoritos ({isSuccess ? favoriteTrainers.length : 0})</Typography>

      <div className={classes.list}>
        {isSuccess && favoriteTrainers.length > 0 && <TrainerList trainers={favoriteTrainers} />}

        {isSuccess && favoriteTrainers.length === 0 && (
          <div className={classes.indicator}>
            <Typography align="center">Você não possui Personal Trainers favoritos.</Typography>
          </div>
        )}

        {isError && (
          <div className={classes.indicator}>
            <Typography align="center">
              Não foi possível carregar a lista de Personal Trainers favoritos.
            </Typography>
          </div>
        )}

        {isLoading && (
          <div className={classes.indicator}>
            <CircularProgress color="primary" />
          </div>
        )}
      </div>
    </div>
  );
};
