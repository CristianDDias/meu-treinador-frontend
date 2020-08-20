import React from 'react';
import { TrainerProfileCard } from '../TrainerProfileCard/TrainerProfileCard';
import { useStyles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  test?: string;
}

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = () => {
  const classes = useStyles();
  return (
    <TrainerProfileCard title="Avaliações">
      <div className={classes.container}>Tudo Certo</div>
    </TrainerProfileCard>
  );
};
