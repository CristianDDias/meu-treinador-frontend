import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: '100%',
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
}));

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
