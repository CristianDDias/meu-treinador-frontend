import React from 'react';
import Chip from '@material-ui/core/Chip';
import { TrainerProfileCard } from '../TrainerProfileCard/TrainerProfileCard';
import { useStyles } from './TrainerProfileSpecialties.jss';

interface TrainerProfileSpecialtiesProps {
  specialties: string[];
}

export const TrainerProfileSpecialties: React.FC<TrainerProfileSpecialtiesProps> = ({
  specialties,
}) => {
  const classes = useStyles();
  return (
    <TrainerProfileCard title="Especialidades">
      <div className={classes.container}>
        {specialties.map((specialty) => (
          <Chip label={specialty} key={specialty} />
        ))}
      </div>
    </TrainerProfileCard>
  );
};
