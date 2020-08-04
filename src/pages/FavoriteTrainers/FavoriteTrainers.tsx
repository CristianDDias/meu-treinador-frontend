import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TrainerList } from "../../components/TrainerList/TrainerList";
import { Trainer } from "../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
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
  label: {
    background: theme.palette.background.paper,
    padding: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    borderBottom: theme.border,
  },
}));

const trainers: Trainer[] = Array.from(Array(3), (_, index) => ({
  id: `${index}`,
  name: `Trainer Trainer ${index}`,
  description:
    "Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa.",
  rating: 4.5,
  img:
    "https://assetbucketdevelopment.blob.core.windows.net/testing/15539755273179878-Male_25.jpg",
}));

export const FavoriteTrainers = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.label}>
        Favoritos ({trainers.length})
      </Typography>
      <div className={classes.list}>
        <TrainerList trainers={trainers} />
      </div>
    </div>
  );
};
