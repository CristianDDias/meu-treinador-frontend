import React from 'react';
import { useHistory } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { Trainer } from '../../../interfaces/trainer';
import { formatRatingValue } from '../../../utils/formatters';
import { styles } from './TrainerListItem.jss';

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { id, name, description, rating, image },
}) => {
  const history = useHistory();

  const navigateToTrainer = (): void => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <ListItem button onClick={navigateToTrainer}>
      <Box sx={styles.layout}>
        <Avatar sx={styles.avatar} variant="rounded" src={image} />

        <Box sx={styles.trainer}>
          <Typography sx={styles.name} noWrap>
            {name}
          </Typography>
          <Box sx={styles.rating}>
            <StarIcon color="primary" fontSize="small" />
            <Typography variant="body2">{formatRatingValue(rating?.value ?? 0)}</Typography>
            <Typography variant="body2" color="textSecondary">
              ({rating?.reviews ?? 0} avaliações)
            </Typography>
          </Box>
        </Box>

        <Typography sx={styles.info} variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </ListItem>
  );
};
