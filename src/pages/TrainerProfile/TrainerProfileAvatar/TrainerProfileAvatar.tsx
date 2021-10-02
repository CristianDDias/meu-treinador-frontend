import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Card } from '../../../components/Card/Card';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { useGetFavoriteTrainersQuery, usePatchFavoriteTrainersMutation } from '../../../redux/api';
import { styles } from './TrainerProfileAvatar.jss';

interface TrainerProfileAvatarProps {
  trainer: Trainer;
}

export const TrainerProfileAvatar: React.FC<TrainerProfileAvatarProps> = ({ trainer }) => {
  const { data = [], isSuccess } = useGetFavoriteTrainersQuery({});
  const [patchFavoriteTrainers] = usePatchFavoriteTrainersMutation();

  const isFavorite = isSuccess ? data.some(({ id }) => id === trainer.id) : false;

  const handleClickFavorite = () => {
    patchFavoriteTrainers({ trainer, isFavorite: !isFavorite });
  };

  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box position="relative">
          <IconButton sx={styles.favoriteButton} color="primary" onClick={handleClickFavorite}>
            {isFavorite ? <FavoriteIcon fontSize="large" /> : <FavoriteBorderIcon fontSize="large" />}
          </IconButton>
          <Avatar sx={styles.avatar} variant="rounded" src={trainer.image} />
        </Box>
        <Typography sx={styles.name}>{trainer.name}</Typography>
        <Box display="flex">
          <Rating
            sx={styles.rating}
            value={trainer.rating?.value ?? 0}
            precision={0.1}
            size="small"
            readOnly
          />
          <Typography variant="body2">
            {formatRatingValue(trainer.rating?.value ?? 0)} ({trainer.rating?.reviews ?? 0} avaliações)
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
