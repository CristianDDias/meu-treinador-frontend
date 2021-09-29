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
import { useTrainerDetails } from '../../hooks/useTrainerDetails';
import { styles } from './TrainerProfile.jss';

export const TrainerProfile: React.FC = () => {
  const { trainerId } = useParams<{ trainerId: string }>();
  const { trainer, isLoading, isSuccess, isError } = useTrainerDetails(trainerId);

  if (isLoading) {
    return <TrainerProfileSkeleton />;
  }

  if (isError) {
    return (
      <Box sx={styles.message}>
        <Typography align="center">Não foi possível carregar o perfil do Personal Trainer.</Typography>
      </Box>
    );
  }

  // #TODO: Substituir botões de contato? Opções:
  // - Enviar mensagem
  // - Agendar
  // - Avaliar

  // #TODO: Criar card para exibir fotos adicionais

  if (isSuccess) {
    return (
      <Box sx={styles.container}>
        <TrainerProfileAvatar trainer={trainer} />
        <TrainerProfileActions phone={trainer.contacts.phone} />
        <TrainerProfileSocialMedia />
        <TrainerProfileInfo title="Sobre mim" text={trainer.description} />
        <TrainerProfileInfo title="Qualificações" text={trainer.qualifications} />
        <TrainerProfileSpecialties specialties={trainer.specialties} />
        <TrainerProfileServiceLocations locations={trainer.locations} />
        <TrainerProfileServiceSchedules schedules={trainer.schedules} />
        <TrainerProfileReviews trainerId={trainerId} />
      </Box>
    );
  }

  return null;
};
