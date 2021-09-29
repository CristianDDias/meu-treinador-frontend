import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { Card } from '../../../components/Card/Card';
import { styles } from './TrainerProfileSpecialties.jss';

interface TrainerProfileSpecialtiesProps {
  specialties: string[];
}

export const TrainerProfileSpecialties: React.FC<TrainerProfileSpecialtiesProps> = ({ specialties }) => {
  return (
    <Card title="Especialidades">
      <Box sx={styles.container}>
        {specialties.map((specialty) => (
          <Chip sx={styles.chip} label={specialty} key={specialty} />
        ))}
      </Box>
    </Card>
  );
};
