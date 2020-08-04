import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { TrainerList } from "../../components/TrainerList/TrainerList";
import { Trainer } from "../../interfaces/trainer";

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

const trainers: Trainer[] = Array.from(Array(10), (_, index) => ({
  id: `${index}`,
  name: `Trainer Trainer ${index}`,
  description:
    "Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa.",
  rating: 4.5,
  img:
    "https://assetbucketdevelopment.blob.core.windows.net/testing/15539755273179878-Male_25.jpg",
}));

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
