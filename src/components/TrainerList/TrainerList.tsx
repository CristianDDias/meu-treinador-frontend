import React from 'react';
import List from '@material-ui/core/List';
import { TrainerListItem } from './TrainerListItem/TrainerListItem';
import { Trainer } from '../../interfaces/trainer';

interface TrainerListProps {
  trainers: Trainer[];
}

export const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  return (
    <List>
      {trainers.map((trainer) => (
        <TrainerListItem key={trainer.id} trainer={trainer} />
      ))}
    </List>
  );
};
