import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Card } from '../../../components/Card/Card';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { useStyles } from './TrainerProfileAvatar.jss';

interface TrainerProfileAvatarProps {
  trainer: Trainer;
}

export const TrainerProfileAvatar: React.FC<TrainerProfileAvatarProps> = ({ trainer }) => {
  const classes = useStyles();
  return (
    <Card>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box position="relative">
          <IconButton className={classes.favoriteButton} color="primary">
            {trainer.isFavorite ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar className={classes.avatar} variant="rounded" src={trainer.img} />
          <Typography className={classes.price}>A partir de R$ {trainer.price}</Typography>
        </Box>
        <Box display="flex">
          <IconButton
            className={classes.contactButton}
            color="primary"
            href={`https://wa.me/${trainer.contact.whatsapp}`}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.contactButton}
            color="primary"
            href={`mailto:${trainer.contact.email}`}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
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
