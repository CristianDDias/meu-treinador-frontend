import React, { useCallback, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useTrainers } from '../../hooks/useTrainers';
import { useStyles } from './SearchTrainers.jss';

export const SearchTrainers: React.FC = () => {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const { trainers, isLoading, isSuccess, isError } = useTrainers({ name: search });

  const handleSearch = useCallback((text: string) => {
    setSearch(text);
  }, []);

  return (
    <div className={classes.container}>
      <SearchBar placeholder="Buscar Personal Trainer..." onSearch={handleSearch} />

      <div className={classes.list}>
        {isSuccess && trainers.length > 0 && <TrainerList trainers={trainers} />}

        {isSuccess && trainers.length === 0 && (
          <div className={classes.indicator}>
            <Typography align="center">Nenhum Personal Trainer encontrado.</Typography>
          </div>
        )}

        {isError && (
          <div className={classes.indicator}>
            <Typography align="center">
              Não foi possível carregar a lista de Personal Trainers.
            </Typography>
          </div>
        )}

        {isLoading && (
          <div className={classes.indicator}>
            <CircularProgress color="primary" />
          </div>
        )}
      </div>
    </div>
  );
};
