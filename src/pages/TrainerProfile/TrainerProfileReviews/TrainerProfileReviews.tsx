import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { Card } from '../../../components/Card/Card';
import { formatRatingValue } from '../../../utils/formatters';
import { useTrainerReviews } from '../../../hooks/useTrainerReviews';
import { styles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  trainerId: string;
}

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = ({ trainerId }) => {
  const { reviews, isLoading, isSuccess, isError } = useTrainerReviews(trainerId);

  return (
    <Card title={`Avaliações (${reviews.length})`}>
      {isSuccess && reviews.length > 0 && (
        // #TODO: Criar componentes "ReviewList" e "ReviewListItem"
        <List disablePadding>
          {reviews.map((review, index) => (
            <ListItem key={review.id} disableGutters divider={index !== reviews.length - 1}>
              <Box sx={styles.item} key={review.id}>
                <Box sx={styles.author}>
                  <Typography sx={styles.name} variant="body2">
                    {review.author}
                  </Typography>
                  <Box sx={styles.rating}>
                    <Rating value={review.rating} precision={0.1} size="small" readOnly />
                    <Typography variant="body2">{formatRatingValue(review.rating)}</Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="textSecondary">
                  {review.description}
                </Typography>
              </Box>
            </ListItem>
          ))}
        </List>
      )}

      {isSuccess && reviews.length === 0 && (
        <Typography variant="body2">Personal Trainer não possui avaliações.</Typography>
      )}

      {isError && (
        <Typography variant="body2">Não foi possível carregar as avaliações do Personal Trainer.</Typography>
      )}

      {isLoading && <CircularProgress color="primary" style={{ alignSelf: 'center' }} />}
    </Card>
  );
};
