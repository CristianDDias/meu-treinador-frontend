import React from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TrainerProfileAvatar } from './TrainerProfileAvatar/TrainerProfileAvatar';
import { TrainerProfileInfo } from './TrainerProfileInfo/TrainerProfileInfo';
import { TrainerProfileActions } from './TrainerProfileActions/TrainerProfileActions';
import { TrainerProfileSocialMedia } from './TrainerProfileSocialMedia/TrainerProfileSocialMedia';
import { TrainerProfileSpecialties } from './TrainerProfileSpecialties/TrainerProfileSpecialties';
import { TrainerProfileServiceLocations } from './TrainerProfileServiceLocations/TrainerProfileServiceLocations';
import { TrainerProfileServiceSchedules } from './TrainerProfileServiceSchedules/TrainerProfileServiceSchedules';
import { TrainerProfileReviews } from './TrainerProfileReviews/TrainerProfileReviews';
import { TrainerProfileSkeleton } from './TrainerProfileSkeleton/TrainerProfileSkeleton';
import { useGetTrainerDetailsQuery } from '../../redux/api';
import { styles } from './TrainerProfile.jss';

export const TrainerProfile: React.FC = () => {
  const { trainerId } = useParams<{ trainerId: string }>();
  const { data, isFetching, isSuccess, isError } = useGetTrainerDetailsQuery({ trainerId });

  if (isFetching) {
    return <TrainerProfileSkeleton />;
  }

  if (isError || !data) {
    return (
      <Box sx={styles.message}>
        <Typography align="center">Não foi possível carregar o perfil do Personal Trainer.</Typography>
      </Box>
    );
  }

  // #TODO: Criar card para exibir fotos adicionais

  if (isSuccess) {
    return (
      <Box sx={styles.container}>
        <TrainerProfileAvatar trainer={data} />
        <TrainerProfileActions trainerId={trainerId} phone={data.contacts.phone} />
        <TrainerProfileSocialMedia />
        <TrainerProfileInfo title="Sobre mim" text={data.description} />
        <TrainerProfileInfo title="Qualificações" text={data.qualifications} />
        <TrainerProfileSpecialties specialties={data.specialties} />
        <TrainerProfileServiceLocations locations={data.locations} />
        <TrainerProfileServiceSchedules schedules={data.schedules} />
        <TrainerProfileReviews trainerId={trainerId} />
      </Box>
    );
  }

  return null;
};
