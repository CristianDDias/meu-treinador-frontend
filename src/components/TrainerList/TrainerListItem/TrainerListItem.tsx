import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarRate";
import { Trainer } from "../../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    marginRight: theme.spacing(1),
  },
  info: {
    display: "flex",
    flexDirection: "column",
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
}));

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { id, name, description, rating, img },
}) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToTrainer = () => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <ListItem button onClick={navigateToTrainer}>
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
    </ListItem>
  );
};
