import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { TrainerProfileAvatar } from './TrainerProfileAvatar/TrainerProfileAvatar';
import { TrainerProfileInfo } from './TrainerProfileInfo/TrainerProfileInfo';
import { TrainerProfileContacts } from './TrainerProfileContacts/TrainerProfileContacts';
import { TrainerProfileSpecialties } from './TrainerProfileSpecialties/TrainerProfileSpecialties';
import { TrainerProfileServiceLocations } from './TrainerProfileServiceLocations/TrainerProfileServiceLocations';
import { TrainerProfileServiceSchedules } from './TrainerProfileServiceSchedules/TrainerProfileServiceSchedules';
import { TrainerProfileReviews } from './TrainerProfileReviews/TrainerProfileReviews';
import { TrainerProfileSkeleton } from './TrainerProfileSkeleton/TrainerProfileSkeleton';
import { useTrainerDetails } from '../../hooks/useTrainerDetails';
import { useStyles } from './TrainerProfile.jss';

export const TrainerProfile: React.FC = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();
  const { trainer, isLoading, isSuccess, isError } = useTrainerDetails(trainerId);

  return (
    <div className={classes.container}>
      {isSuccess && (
        <>
          <TrainerProfileAvatar trainer={trainer} />
          <TrainerProfileContacts contacts={trainer.details.contacts} />
          <TrainerProfileInfo title="Sobre mim" text={trainer.description} />
          <TrainerProfileInfo title="Qualificações" text={trainer.details.qualifications} />
          <TrainerProfileSpecialties specialties={trainer.details.specialties} />
          <TrainerProfileServiceLocations locations={trainer.details.locations} />
          <TrainerProfileServiceSchedules schedules={trainer.details.schedules} />
          <TrainerProfileReviews trainerId={trainerId} />
        </>
      )}

      {isError && (
        <div className={classes.message}>
          <Typography align="center">
            Não foi possível carregar o perfil do Personal Trainer.
          </Typography>
        </div>
      )}

      {isLoading && <TrainerProfileSkeleton />}
    </div>
  );
};
