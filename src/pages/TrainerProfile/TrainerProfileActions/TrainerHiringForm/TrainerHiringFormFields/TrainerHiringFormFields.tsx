import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import Autocomplete from '@mui/material/Autocomplete';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { SelectAutocomplete } from '../../../../../components/SelectAutocomplete/SelectAutocomplete';
import { TrainerFormQuestion, QuestionType } from '../../../../../interfaces/trainer';

interface TrainerHiringFormFieldsProps {
  formQuestions: TrainerFormQuestion[];
}

export const TrainerHiringFormFields: React.FC<TrainerHiringFormFieldsProps> = ({ formQuestions }) => {
  const { control } = useFormContext();

  const getDefaultValue = (type: QuestionType) => {
    if (type === QuestionType.Text) {
      return '';
    }
    if (type === QuestionType.SingleChoice) {
      return '';
    }
    if (type === QuestionType.MultipleChoice) {
      return [];
    }
    throw new Error('Unexpected form question type');
  };

  return (
    <Stack spacing={2} divider={<Divider />}>
      {formQuestions.map((formQuestion, index) => (
        <Stack spacing={2}>
          <Typography component="legend">{formQuestion.question}</Typography>
          <Controller
            control={control}
            name={index.toString()}
            defaultValue={getDefaultValue(formQuestion.type)}
            rules={{
              validate: (value) => (!value?.length ? 'Campo obrigatório' : undefined),
            }}
            render={({ field, fieldState: { error } }) => {
              if (formQuestion.type === QuestionType.Text) {
                return (
                  <TextField {...field} fullWidth size="small" error={!!error} helperText={error?.message} />
                );
              }
              if (formQuestion.type === QuestionType.SingleChoice) {
                return (
                  <Autocomplete
                    {...field}
                    fullWidth
                    size="small"
                    options={formQuestion.options}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder="Selecione"
                        error={!!error}
                        helperText={error?.message}
                      />
                    )}
                    onChange={(_, value) => field.onChange(value)}
                  />
                );
              }
              if (formQuestion.type === QuestionType.MultipleChoice) {
                return (
                  <SelectAutocomplete
                    {...field}
                    options={formQuestion.options}
                    error={!!error}
                    helperText={error?.message}
                  />
                );
              }
              throw new Error('Unexpected form question type');
            }}
          />
        </Stack>
      ))}
    </Stack>
  );
};
