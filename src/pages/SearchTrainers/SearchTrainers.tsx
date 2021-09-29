import React, { useCallback, useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useTrainers, TrainersFilters } from '../../hooks/useTrainers';
import { styles } from './SearchTrainers.jss';

// #TODO: Melhorar organização dos componentes de filtros
//        - SearchTrainers, SearchBar, TrainerFilter

export const SearchTrainers: React.FC = () => {
  const [filters, setFilters] = useState<TrainersFilters>();
  const { trainers, isLoading, isSuccess, isError } = useTrainers(filters);

  const handleSearch = useCallback((newFilters?: TrainersFilters) => {
    setFilters(newFilters);
  }, []);

  return (
    <Box sx={styles.container}>
      <SearchBar onSearch={handleSearch} />

      <Box sx={styles.list}>
        {isSuccess && trainers.length > 0 && <TrainerList trainers={trainers} />}

        {isSuccess && trainers.length === 0 && (
          <Box sx={styles.indicator}>
            <Typography align="center">Nenhum Personal Trainer encontrado.</Typography>
          </Box>
        )}

        {isError && (
          <Box sx={styles.indicator}>
            <Typography align="center">Não foi possível carregar a lista de Personal Trainers.</Typography>
          </Box>
        )}

        {isLoading && (
          <Box sx={styles.indicator}>
            <CircularProgress color="primary" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
