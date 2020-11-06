import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { Card } from '../../../components/Card/Card';
import { formatRatingValue } from '../../../utils/formatters';
import { useTrainerReviews } from '../../../hooks/useTrainerReviews';
import { useStyles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  trainerId: string;
}

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = ({ trainerId }) => {
  const classes = useStyles();
  const { reviews, isLoading, isSuccess, isError } = useTrainerReviews(trainerId);

  return (
    <Card title={`Avaliações (${reviews.length})`}>
      {isSuccess && reviews.length > 0 && (
        // TODO: Criar componentes "ReviewList" e "ReviewListItem"
        <List disablePadding>
          {reviews.map((review, index) => (
            <ListItem key={review.id} disableGutters divider={index !== reviews.length - 1}>
              <div className={classes.item} key={review.id}>
                <div className={classes.author}>
                  <Typography className={classes.name} variant="body2">
                    {review.author}
                  </Typography>
                  <div className={classes.rating}>
                    <Rating value={review.rating} precision={0.5} size="small" readOnly />
                    <Typography variant="body2">{formatRatingValue(review.rating)}</Typography>
                  </div>
                </div>
                <Typography variant="body2" color="textSecondary">
                  {review.description}
                </Typography>
              </div>
            </ListItem>
          ))}
        </List>
      )}

      {isSuccess && reviews.length === 0 && (
        <Typography variant="body2">Personal Trainer não possui avaliações.</Typography>
      )}

      {isError && (
        <Typography variant="body2">
          Não foi possível carregar as avaliações do Personal Trainer.
        </Typography>
      )}

      {isLoading && <CircularProgress color="primary" style={{ alignSelf: 'center' }} />}
    </Card>
  );
};
