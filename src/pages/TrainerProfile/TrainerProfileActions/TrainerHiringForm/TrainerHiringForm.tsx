import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Theme } from '@mui/material/styles';
import { useGetTrainerHiringFormTemplateQuery } from '../../../../redux/api';
import { TrainerFormAnswer } from '../../../../interfaces/trainer';
import { TrainerHiringFormFields } from './TrainerHiringFormFields/TrainerHiringFormFields';

const Transition = React.forwardRef((props: any, ref: any) => {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface TrainerHiringFormProps {
  open: boolean;
  trainerId: string;
  onSubmit: (formAnswers: TrainerFormAnswer[]) => void;
  onClose: () => void;
}

export const TrainerHiringForm: React.FC<TrainerHiringFormProps> = ({
  open,
  trainerId,
  onSubmit,
  onClose,
}) => {
  const result = useGetTrainerHiringFormTemplateQuery({ trainerId }, { skip: !open });
  const formMethods = useForm();

  const shouldUseFullScreen = useMediaQuery<Theme>((theme) => theme.breakpoints.only('xs'));

  const handleSubmit = (answers: Record<string, string | string[]>) => {
    if (result.isSuccess) {
      onSubmit(
        Object.values(answers).map((answer, index) => ({
          ...result.data.form[index],
          answer: answer as any,
        }))
      );
    }
  };

  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={open}
      fullScreen={shouldUseFullScreen}
      TransitionComponent={Transition}
      onClose={onClose}
    >
      <DialogTitle>
        {result.isSuccess ? result.data.name : '...'}
        <IconButton
          aria-label="close"
          sx={{
            position: 'absolute',
            right: (theme) => theme.spacing(2),
            top: (theme) => theme.spacing(2),
            color: (theme) => theme.palette.grey[500],
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        {result.isLoading && (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <CircularProgress color="primary" />
          </Stack>
        )}

        {result.error && (
          <Stack justifyContent="center" alignItems="center" height="100%">
            <Typography variant="body2">Não foi possível carregar o formulário.</Typography>
          </Stack>
        )}

        {result.isSuccess && (
          <FormProvider {...formMethods}>
            <TrainerHiringFormFields formQuestions={result.data.form} />
          </FormProvider>
        )}
      </DialogContent>

      <DialogActions>
        <Button
          variant="contained"
          onClick={formMethods.handleSubmit(handleSubmit)}
          disabled={!result.isSuccess}
        >
          Enviar
        </Button>
      </DialogActions>
    </Dialog>
  );
};
