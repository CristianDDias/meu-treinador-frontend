import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { TrainerList } from "../../components/TrainerList/TrainerList";

import trainers from "../../__mocks__/trainers.json";
const favoriteTrainers = trainers.slice(0, 3);

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

export const FavoriteTrainers = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.label}>
        Favoritos ({favoriteTrainers.length})
      </Typography>
      <div className={classes.list}>
        <TrainerList trainers={favoriteTrainers} />
      </div>
    </div>
  );
};
