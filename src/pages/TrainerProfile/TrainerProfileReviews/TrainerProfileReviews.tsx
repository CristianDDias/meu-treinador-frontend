import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import { Card } from '../../../components/Card/Card';
import { TrainerReview } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { useStyles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  reviews: TrainerReview[];
}

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = ({ reviews }) => {
  const classes = useStyles();
  return (
    <Card title={`Avaliações (${reviews.length})`}>
      <div className={classes.container}>
        {reviews.map((review) => (
          <div className={classes.review} key={review.id}>
            <div className={classes.user}>
              <Typography className={classes.name} variant="body2">
                {review.name}
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
        ))}
      </div>
    </Card>
  );
};
