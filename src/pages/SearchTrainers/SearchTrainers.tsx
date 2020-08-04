import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { TrainerList } from "../../components/TrainerList/TrainerList";

import { trainers } from "../../__mocks__/trainers";

const useStyles = makeStyles({
  container: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  list: {
    flexBasis: 0,
    flexGrow: 1,
    overflow: "auto",
  },
});

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
