import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import { TrainerProfileCard } from '../TrainerProfileCard/TrainerProfileCard';
import { TrainerServiceSchedules } from '../../../interfaces/trainer';

const useStyles = makeStyles((theme: Theme) => ({
  cell: {
    padding: theme.spacing(2, 0),
  },
}));

interface TrainerProfileServiceSchedulesProps {
  schedules: TrainerServiceSchedules;
}

export const TrainerProfileServiceSchedules: React.FC<TrainerProfileServiceSchedulesProps> = ({
  schedules,
}) => {
  const classes = useStyles();

  const displayDay: Record<string, string> = {
    monday: 'Segunda',
    tuesday: 'Terça',
    wednesday: 'Quarta',
    thursday: 'Quinta',
    friday: 'Sexta',
    saturday: 'Sábado',
    sunday: 'Domingo',
  };

  return (
    <TrainerProfileCard title="Horários de atendimento">
      <TableContainer>
        <Table>
          <TableBody>
            {Object.entries(schedules).map(
              ([day, schedule]) =>
                schedule && (
                  <TableRow key={day}>
                    <TableCell className={classes.cell}>{displayDay[day]}</TableCell>
                    <TableCell className={classes.cell} align="right">
                      <Chip label={`${schedule.startTime} - ${schedule.endTime}`} size="small" />
                    </TableCell>
                  </TableRow>
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </TrainerProfileCard>
  );
};
