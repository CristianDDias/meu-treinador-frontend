import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import FilterIcon from '@mui/icons-material/Tune';
import SearchIcon from '@mui/icons-material/Search';
import { TrainerFilter } from './TrainerFilter/TrainerFilter';
import { styles } from './TrainerSearchBar.jss';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import { setFilter, FilterState } from '../../../redux/filter/slice';

export const TrainerSearchBar: React.FC = () => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector((state) => state.filter);
  const [localFilter, setLocalFilter] = useState<FilterState>(filter);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setLocalFilter(filter);
  }, [filter]);

  const handleSearch = () => {
    dispatch(setFilter(localFilter));
  };

  const handleFilter = (updatedFilter: Omit<FilterState, 'name'>) => {
    dispatch(setFilter({ name: localFilter.name, ...updatedFilter }));
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalFilter((state) => ({
      ...state,
      name: event.target.value.length ? event.target.value : undefined,
    }));
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Box sx={styles.container}>
        <TextField
          sx={styles.input}
          value={localFilter?.name || ''}
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

      <TrainerFilter open={open} filter={localFilter} onFilter={handleFilter} onClose={handleClose} />
    </>
  );
};
