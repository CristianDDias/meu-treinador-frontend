import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useStyles } from './Card.jss';

interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  const classes = useStyles();
  return (
    <div className={classes.card}>
      {title && <Typography className={classes.title}>{title}</Typography>}
      {children}
    </div>
  );
};
