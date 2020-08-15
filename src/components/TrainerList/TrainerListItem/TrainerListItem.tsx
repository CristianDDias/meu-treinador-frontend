import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: 'grid',
    gridTemplate: `
      "avatar trainer price" 72px
      "info   info    info " auto
      / auto 1fr auto
    `,
    columnGap: theme.spacing(1),
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: '100%',
  },
  avatar: {
    gridArea: 'avatar',
    width: '72px',
    height: '72px',
  },
  trainer: {
    gridArea: 'trainer',
    alignSelf: 'center',
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    lineHeight: 1.25,
    marginBottom: theme.spacing(0.5),
  },
  price: {
    gridArea: 'price',
    alignSelf: 'center',
    fontWeight: theme.typography.fontWeightMedium,
  },
  info: {
    gridArea: 'info',
    display: '-webkit-box',
    boxOrient: 'vertical',
    lineClamp: 3,
    lineHeight: '1.25rem',
    maxHeight: '3.75rem',
    overflow: 'hidden',
    marginTop: theme.spacing(2),
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
    '& > :first-child': {
      marginRight: theme.spacing(0.5),
    },
  },
}));

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { id, name, description, price, rating, img },
}) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToTrainer = () => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <ListItem button onClick={navigateToTrainer}>
      <div className={classes.layout}>
        <Avatar className={classes.avatar} variant="rounded" src={img} />

        <div className={classes.trainer}>
          <Typography className={classes.name}>{name}</Typography>
          <div className={classes.rating}>
            <StarIcon color="primary" fontSize="small" />
            <Typography variant="body2">
              {formatRatingValue(rating.value)} ({rating.reviews})
            </Typography>
          </div>
        </div>

        <Typography className={classes.price} color="primary">
          R$ {Math.floor(price)}
        </Typography>

        <Typography className={classes.info} variant="body2" color="textSecondary" align="justify">
          {description}
        </Typography>
      </div>
    </ListItem>
  );
};
