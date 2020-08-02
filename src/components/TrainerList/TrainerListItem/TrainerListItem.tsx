import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarRate";
import { Trainer } from "../../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    display: "flex",
    boxShadow: theme.softShadow,
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
    <ButtonBase focusRipple onClick={navigateToTrainer}>
      <Paper elevation={0} className={classes.paper}>
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
    </ButtonBase>
  );
};
