import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './TrainerProfileCard.jss';

interface TrainerProfileCardProps {
  alignItemsCenter?: boolean;
  title?: string;
}

export const TrainerProfileCard: React.FC<TrainerProfileCardProps> = ({
  alignItemsCenter,
  title,
  children,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.card} alignItems={alignItemsCenter ? 'center' : undefined}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {children}
    </Box>
  );
};
