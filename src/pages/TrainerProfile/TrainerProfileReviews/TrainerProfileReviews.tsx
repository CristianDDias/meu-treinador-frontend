import React from 'react';
import { Card } from '../../../components/Card/Card';
import { useStyles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  test?: string;
}

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = () => {
  const classes = useStyles();
  return (
    <Card title="Avaliações">
      <div className={classes.container}>Tudo Certo</div>
    </Card>
  );
};
