import React from 'react';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Card } from '../../../components/Card/Card';
import { TrainerSchedule, Weekday } from '../../../interfaces/trainer';

const displayDay: Record<Weekday, string> = {
  monday: 'Segunda',
  tuesday: 'Terça',
  wednesday: 'Quarta',
  thursday: 'Quinta',
  friday: 'Sexta',
  saturday: 'Sábado',
  sunday: 'Domingo',
};

interface TrainerProfileServiceSchedulesProps {
  schedules: TrainerSchedule[];
}

export const TrainerProfileServiceSchedules: React.FC<TrainerProfileServiceSchedulesProps> = ({
  schedules,
}) => {
  return (
    <Card title="Horários de atendimento">
      <List disablePadding>
        {schedules.map(({ weekday, startTime, endTime }, index) => (
          <ListItem key={weekday} disableGutters divider={index !== schedules.length - 1}>
            <ListItemText primary={displayDay[weekday]} primaryTypographyProps={{ variant: 'body2' }} />
            <Chip label={`${startTime} - ${endTime}`} size="small" />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

// #TODO: Criar opção "Informe-se sobre a disponibilidade"
