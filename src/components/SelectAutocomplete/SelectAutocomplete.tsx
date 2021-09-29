import React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { alpha } from '@mui/material/styles';

interface SelectAutocompleteProps<T> {
  options: T[];
  value?: T[];
  onChange: (value: T[]) => void;
  groupBy?: (option: T) => string;
  getOptionLabel?: (option: T) => string;
  getOptionLabelList?: (option: T) => string;
}

export function SelectAutocomplete<T>({
  options,
  value,
  onChange,
  groupBy,
  getOptionLabel,
  getOptionLabelList,
}: SelectAutocompleteProps<T>) {
  const handleChange = (_: any, newValue: T[]) => {
    onChange(newValue);
  };

  return (
    <Autocomplete
      fullWidth
      multiple
      disableCloseOnSelect
      size="small"
      value={value}
      options={options}
      groupBy={groupBy}
      getOptionLabel={getOptionLabel}
      renderInput={(params) => <TextField {...params} placeholder="Selecione" />}
      renderGroup={(params) => params}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox checked={selected} sx={{ marginRight: (theme) => theme.spacing(1) }} />
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

SelectAutocomplete.defaultProps = {
  value: undefined,
  groupBy: undefined,
  getOptionLabel: undefined,
  getOptionLabelList: undefined,
};
