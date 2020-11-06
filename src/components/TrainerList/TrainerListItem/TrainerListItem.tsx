import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { useStyles } from './TrainerListItem.jss';

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { id, name, description, rating, image },
}) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToTrainer = (): void => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <ListItem button onClick={navigateToTrainer}>
      <div className={classes.layout}>
        <Avatar className={classes.avatar} variant="rounded" src={image} />

        <div className={classes.trainer}>
          <Typography className={classes.name} noWrap>
            {name}
          </Typography>
          <div className={classes.rating}>
            <StarIcon color="primary" fontSize="small" />
            <Typography variant="body2">{formatRatingValue(rating.value)}</Typography>
            <Typography variant="body2" color="textSecondary">
              ({rating.reviews} avaliações)
            </Typography>
          </div>
        </div>

        <Typography className={classes.info} variant="body2" color="textSecondary">
          {description}
        </Typography>
      </div>
    </ListItem>
  );
};
