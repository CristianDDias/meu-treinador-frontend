import React from 'react';
import Typography from '@mui/material/Typography';
import { Card } from '../../../components/Card/Card';

interface TrainerProfileInfoProps {
  title: string;
  text: string;
}

export const TrainerProfileInfo: React.FC<TrainerProfileInfoProps> = ({ title, text }) => {
  return (
    <Card title={title}>
      <Typography variant="body2">{text}</Typography>
    </Card>
  );
};
