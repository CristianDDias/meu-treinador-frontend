import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import { TrainerListItem } from "./TrainerListItem/TrainerListItem";
import { Trainer } from "../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1.5, 1),
    "& > :not(:last-child)": {
      marginBottom: theme.spacing(1.5),
    },
  },
}));

interface TrainerListProps {
  trainers: Trainer[];
}

export const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  const classes = useStyles();
  return (
    <div className={classes.list}>
      {trainers.map((trainer) => (
        <TrainerListItem key={trainer.id} trainer={trainer} />
      ))}
    </div>
  );
};
