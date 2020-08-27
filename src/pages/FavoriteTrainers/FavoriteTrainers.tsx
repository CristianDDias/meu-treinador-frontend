import React from 'react';
import Typography from '@material-ui/core/Typography';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useStyles } from './FavoriteTrainers.jss';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';

const favoriteTrainers = trainers.filter((trainer) => trainer.isFavorite);
// #MOCK-END

export const FavoriteTrainers = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.label}>Favoritos ({favoriteTrainers.length})</Typography>
      <div className={classes.list}>
        <TrainerList trainers={favoriteTrainers} />
      </div>
    </div>
  );
};
