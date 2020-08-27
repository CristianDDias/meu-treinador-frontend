import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Card } from '../../../components/Card/Card';

interface TrainerProfileInfoProps {
  title: string;
  text: string;
}

export const TrainerProfileInfo: React.FC<TrainerProfileInfoProps> = ({ title, text }) => {
  return (
    <Card title={title}>
      <Typography variant="body2" align="justify">
        {text}
      </Typography>
    </Card>
  );
};
