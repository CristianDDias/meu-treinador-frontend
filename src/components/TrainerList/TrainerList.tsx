import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { TrainerListItem } from "./TrainerListItem/TrainerListItem";
import { Trainer } from "../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  list: {
    background: theme.palette.background.paper,
  },
}));

interface TrainerListProps {
  trainers: Trainer[];
}

export const TrainerList: React.FC<TrainerListProps> = ({ trainers }) => {
  const classes = useStyles();
  return (
    <List disablePadding className={classes.list}>
      {trainers.map((trainer, index) => (
        <React.Fragment key={trainer.id}>
          <TrainerListItem trainer={trainer} />
          {index !== trainers.length - 1 ? <Divider variant="middle" /> : null}
        </React.Fragment>
      ))}
    </List>
  );
};
