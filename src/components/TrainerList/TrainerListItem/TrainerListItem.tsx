import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarRate";
import { Trainer } from "../../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      display: "flex",
    },
    avatar: {
      width: "100px",
      height: "100px",
    },
    info: {
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0.5, 1, 1, 1),
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    rating: {
      display: "flex",
      alignItems: "center",
    },
    description: {
      overflow: "hidden",
      lineHeight: "1rem",
      height: "4rem",
    },
  })
);

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { name, description, rating, img },
}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Avatar variant="rounded" src={img} className={classes.avatar} />
      <div className={classes.info}>
        <div className={classes.header}>
          <Typography>{name}</Typography>
          <div className={classes.rating}>
            <Typography variant="caption">{rating}</Typography>
            <StarIcon color="primary" fontSize="small" />
          </div>
        </div>
        <Typography
          variant="caption"
          color="textSecondary"
          align="justify"
          className={classes.description}
        >
          {description}
        </Typography>
      </div>
    </Paper>
  );
};
