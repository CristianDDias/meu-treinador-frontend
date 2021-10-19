import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';

interface SelectAutocompleteProps<T> {
  options: T[];
  value?: T[];
  error?: boolean;
  helperText?: React.ReactNode;
  onChange: (value: T[]) => void;
  groupBy?: (option: T) => string;
  getOptionLabel?: (option: T) => string;
  getOptionLabelList?: (option: T) => string;
}

function SelectAutocompleteInner<T>(
  {
    options,
    value,
    error,
    helperText,
    onChange,
    groupBy,
    getOptionLabel,
    getOptionLabelList,
  }: SelectAutocompleteProps<T>,
  ref?: React.ForwardedRef<unknown>
) {
  const handleChange = (_: any, newValue: T[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      fullWidth
      multiple
      disableCloseOnSelect
      size="small"
      ref={ref}
      value={value}
      options={options}
      groupBy={groupBy}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => (
        <TextField {...params} placeholder="Selecione" error={error} helperText={helperText} />
      )}
      renderGroup={(params) => params}
      renderOption={(props, option, { selected }) => (
        <li {...props} style={{ minHeight: 48 }}>
          <Checkbox checked={selected} sx={{ padding: 0, marginRight: (theme) => theme.spacing(2) }} />
          {getOptionLabelList ? getOptionLabelList(option) : option}
        </li>
      )}
      ChipProps={{
        sx: {
          background: (theme) => alpha(theme.palette.primary.main, 0.1),
        },
      }}
      onChange={handleChange}
    />
  );
}

export const SelectAutocomplete = React.forwardRef(SelectAutocompleteInner) as <T>(
  props: SelectAutocompleteProps<T> & { ref?: React.ForwardedRef<unknown> }
) => ReturnType<typeof SelectAutocompleteInner>;
