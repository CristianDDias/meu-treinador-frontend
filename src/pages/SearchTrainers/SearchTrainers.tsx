import React from 'react';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { TrainerList } from '../../components/TrainerList/TrainerList';
import { useStyles } from './SearchTrainers.jss';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
// #MOCK-END

export const SearchTrainers = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <SearchBar placeholder="Buscar Personal Trainer..." />
      <div className={classes.list}>
        <TrainerList trainers={trainers} />
      </div>
    </div>
  );
};
