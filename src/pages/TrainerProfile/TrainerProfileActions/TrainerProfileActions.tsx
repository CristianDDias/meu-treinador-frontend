import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GradeIcon from '@mui/icons-material/Grade';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Skeleton from '@mui/material/Skeleton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Card } from '../../../components/Card/Card';
import { TrainerHiringForm } from './TrainerHiringForm/TrainerHiringForm';
import { useGetTrainerRequestQuery, usePostTrainerRequestMutation } from '../../../redux/api';
import { TrainerRequestStatus, TrainerFormAnswer } from '../../../interfaces/trainer';
import { styles } from './TrainerProfileActions.jss';

interface TrainerProfileActionsProps {
  trainerId: string;
  phone: string;
}

export const TrainerProfileActions: React.FC<TrainerProfileActionsProps> = ({ trainerId, phone }) => {
  const { data, isLoading: isLoadingGet } = useGetTrainerRequestQuery({ trainerId });
  const [postTrainerRequest, { isLoading: isLoadingPost }] = usePostTrainerRequestMutation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (formAnswers: TrainerFormAnswer[]) => {
    postTrainerRequest({ trainerId, form: formAnswers });
    setOpen(false);
  };

  return (
    <Card>
      {isLoadingGet || isLoadingPost ? (
        <Box sx={styles.container}>
          <Skeleton variant="rectangular" width="100%" height={36} />
          <Skeleton variant="rectangular" width="100%" height={36} />
        </Box>
      ) : (
        <Box sx={styles.container}>
          {data?.status === TrainerRequestStatus.Pending && (
            <Alert severity="success" icon={false} sx={styles.alert}>
              <strong>Requisição enviada</strong>
              <span>Aguardando resposta</span>
            </Alert>
          )}

          {data?.status === TrainerRequestStatus.Accepted && (
            <Button variant="contained" color="primary" startIcon={<GradeIcon />}>
              Avaliar
            </Button>
          )}

          {!data?.status && (
            <Button variant="contained" color="primary" startIcon={<AddCircleIcon />} onClick={handleOpen}>
              Contratar
            </Button>
          )}

          <Button
            variant="outlined"
            color="primary"
            href={`https://wa.me/55${phone}`}
            startIcon={<WhatsAppIcon />}
          >
            Mensagem
          </Button>

          {data?.status === TrainerRequestStatus.Accepted && (
            <Button variant="outlined" color="error" startIcon={<RemoveCircleIcon />}>
              Cancelar
            </Button>
          )}
        </Box>
      )}

      <TrainerHiringForm open={open} trainerId={trainerId} onSubmit={handleSubmit} onClose={handleClose} />
    </Card>
  );
};
