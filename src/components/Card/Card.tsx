import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styles } from './Card.jss';

interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Box sx={styles.card}>
      {title && <Typography sx={styles.title}>{title}</Typography>}
      {children}
    </Box>
  );
};
