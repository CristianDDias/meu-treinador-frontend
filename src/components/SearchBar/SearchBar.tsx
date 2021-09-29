import React, { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { TrainerFilter } from '../TrainerFilter/TrainerFilter';
import { styles } from './SearchBar.jss';
import { TrainersFilters } from '../../hooks/useTrainers';

interface SearchBarProps {
  onSearch: (filters?: TrainersFilters) => void;
}

// #TODO: Melhorar organização dos componentes de filtros
//        - SearchTrainers, SearchBar, TrainerFilter

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [open, setOpen] = useState(false);
  const [filters, setFilters] = useState<TrainersFilters>();

  const handleSearch = () => {
    onSearch(filters);
  };

  const handleFilter = (newFilters?: Omit<TrainersFilters, 'name'>) => {
    onSearch({ ...newFilters, name: filters?.name });
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((state) => ({
      ...state,
      name: event.target.value.length ? event.target.value : undefined,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch(filters);
    }
  };

  return (
    <>
      <Box sx={styles.container}>
        <TextField
          sx={styles.input}
          value={filters?.name || ''}
          size="small"
          placeholder="Buscar Personal Trainer..."
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton size="small" edge="end" onClick={handleSearch}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <IconButton size="small" onClick={handleOpen}>
          <FilterIcon />
        </IconButton>
      </Box>

      <TrainerFilter open={open} onFilter={handleFilter} onClose={handleClose} />
    </>
  );
};
