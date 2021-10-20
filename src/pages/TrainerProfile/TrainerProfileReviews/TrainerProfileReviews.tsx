import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { Card } from '../../../components/Card/Card';
import { formatRatingValue } from '../../../utils/formatters';
import { useGetTrainerReviewsQuery } from '../../../redux/api';
import { styles } from './TrainerProfileReviews.jss';

interface TrainerProfileReviewsProps {
  trainerId: string;
}

// #TODO: Criar componentes "ReviewList" e "ReviewListItem"

export const TrainerProfileReviews: React.FC<TrainerProfileReviewsProps> = ({ trainerId }) => {
  const { data = [], isFetching, isSuccess, isError } = useGetTrainerReviewsQuery({ trainerId });

  return (
    <Card title={`Avaliações (${data.length})`}>
      {!isFetching && isSuccess && data.length > 0 && (
        <List disablePadding>
          {data.map((review, index) => (
            <ListItem key={review.id} disableGutters divider={index !== data.length - 1}>
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

      {!isFetching && isSuccess && data.length === 0 && (
        <Typography variant="body2">Personal Trainer não possui avaliações.</Typography>
      )}

      {!isFetching && isError && (
        <Typography variant="body2">Não foi possível carregar as avaliações do Personal Trainer.</Typography>
      )}

      {isFetching && (
        <Box sx={styles.loading}>
          <Box display="flex" justifyContent="space-between">
            <Skeleton variant="rectangular" width="100px" height="0.875rem" />
            <Skeleton variant="rectangular" width="120px" height="0.875rem" />
          </Box>
          <Skeleton variant="rectangular" width="100%" height="0.875rem" />
        </Box>
      )}
    </Card>
  );
};
