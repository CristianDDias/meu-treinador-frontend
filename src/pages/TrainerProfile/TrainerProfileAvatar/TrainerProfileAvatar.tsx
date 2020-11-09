import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { Card } from '../../../components/Card/Card';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { useUser, useMutateUserFavoriteTrainer } from '../../../hooks/useUser';
import { useStyles } from './TrainerProfileAvatar.jss';

interface TrainerProfileAvatarProps {
  trainer: Trainer;
}

// TODO: Ajustar componente para não utilizar hooks e receber dados de isFavorite por props

export const TrainerProfileAvatar: React.FC<TrainerProfileAvatarProps> = ({ trainer }) => {
  const classes = useStyles();
  const { user, isSuccess } = useUser();
  const mutateUserFavoriteTrainer = useMutateUserFavoriteTrainer();

  const isFavorite = isSuccess ? user.favoriteTrainers.some(({ id }) => id === trainer.id) : false;

  const handleClickFavorite = () => {
    mutateUserFavoriteTrainer({ trainer, isFavorite: !isFavorite });
  };

  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box position="relative">
          <IconButton
            className={classes.favoriteButton}
            color="primary"
            onClick={handleClickFavorite}
          >
            {isFavorite ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar className={classes.avatar} variant="rounded" src={trainer.image} />
        </Box>
        <Typography className={classes.name}>{trainer.name}</Typography>
        <Box display="flex">
          <Rating
            className={classes.rating}
            value={trainer.rating.value}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2">
            {formatRatingValue(trainer.rating.value)} ({trainer.rating.reviews} avaliações)
          </Typography>
        </Box>
      </Box>
    </Card>
  );
};
