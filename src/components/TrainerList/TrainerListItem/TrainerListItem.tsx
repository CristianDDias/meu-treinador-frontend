import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/StarRate";
import { Trainer } from "../../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  item: {
    padding: theme.spacing(2),
  },
  avatar: {
    width: "104px",
    height: "104px",
    marginRight: theme.spacing(1),
  },
  info: {
    flexBasis: 0,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    flexBasis: 0,
    flexGrow: 1,
    width: 0,
    marginRight: theme.spacing(0.5),
    fontWeight: theme.typography.fontWeightMedium,
  },
  price: {
    fontWeight: theme.typography.fontWeightMedium,
  },
  rating: {
    display: "flex",
    alignItems: "center",
    marginTop: theme.spacing(0.5),
    marginBottom: theme.spacing(1),
  },
  description: {
    overflow: "hidden",
    lineHeight: "1rem",
    height: "3rem",
  },
}));

interface TrainerListItemProps {
  trainer: Trainer;
}

export const TrainerListItem: React.FC<TrainerListItemProps> = ({
  trainer: { id, name, description, price, rating, img },
}) => {
  const classes = useStyles();
  const history = useHistory();

  const navigateToTrainer = () => {
    history.push(`${history.location.pathname}/${id}`);
  };

  return (
    <ListItem className={classes.item} button onClick={navigateToTrainer}>
      <Avatar className={classes.avatar} variant="rounded" src={img} />
      <div className={classes.info}>
        <div className={classes.header}>
          <Typography className={classes.name} noWrap>
            {name}
          </Typography>
          <Typography className={classes.price} color="primary">
            R$ {Math.floor(price)}
          </Typography>
        </div>
        <div className={classes.rating}>
          <StarIcon color="primary" fontSize="small" />
          <Typography variant="caption">
            {rating.value} ({rating.reviews} avaliações)
          </Typography>
        </div>
        <Typography
          className={classes.description}
          variant="caption"
          color="textSecondary"
          align="justify"
        >
          {description}
        </Typography>
      </div>
    </ListItem>
  );
};
