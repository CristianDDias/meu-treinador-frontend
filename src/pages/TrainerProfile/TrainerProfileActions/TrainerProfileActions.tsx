import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import GradeIcon from '@mui/icons-material/Grade';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Card } from '../../../components/Card/Card';
import { styles } from './TrainerProfileActions.jss';

interface TrainerProfileActionsProps {
  phone: string;
}

export const TrainerProfileActions: React.FC<TrainerProfileActionsProps> = ({ phone }) => {
  return (
    <Card>
      <Box sx={styles.container}>
        <Button variant="contained" color="primary" startIcon={<AddCircleIcon />}>
          Contratar
        </Button>
        <Button variant="contained" color="primary" startIcon={<GradeIcon />}>
          Avaliar
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href={`https://wa.me/55${phone}`}
          startIcon={<WhatsAppIcon />}
        >
          Mensagem
        </Button>
        <Button variant="outlined" color="error" startIcon={<RemoveCircleIcon />}>
          Cancelar
        </Button>
      </Box>
    </Card>
  );
};
