import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import StarIcon from "@material-ui/icons/Star";
import { Trainer } from "../../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  layout: {
    display: "grid",
    gridTemplate: `
      "avatar name   price" 36px
      "avatar rating price" 36px
      "info   info   info " auto
      / auto 1fr auto
    `,
    columnGap: theme.spacing(1),
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: "100%",
  },
  avatar: {
    gridArea: "avatar",
    width: "72px",
    height: "72px",
  },
  name: {
    gridArea: "name",
    alignSelf: "flex-end",
    fontWeight: theme.typography.fontWeightMedium,
  },
  rating: {
    gridArea: "rating",
    alignSelf: "flex-start",
    display: "flex",
    alignItems: "center",
    "& > :not(:last-child)": {
      marginRight: theme.spacing(0.5),
    },
  },
  price: {
    gridArea: "price",
    alignSelf: "center",
    fontWeight: theme.typography.fontWeightMedium,
  },
  info: {
    gridArea: "info",
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 3,
    lineHeight: "1.25rem",
    maxHeight: "3.75rem",
    overflow: "hidden",
    marginTop: theme.spacing(2),
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
    <ListItem button onClick={navigateToTrainer}>
      <div className={classes.layout}>
        <Avatar className={classes.avatar} variant="rounded" src={img} />

        <Typography className={classes.name}>{name}</Typography>

        <Typography className={classes.price} color="primary">
          R$ {Math.floor(price)}
        </Typography>

        <div className={classes.rating}>
          <StarIcon color="primary" fontSize="small" />
          <Typography variant="body2">
            {rating.value} ({rating.reviews} avaliações)
          </Typography>
        </div>

        <Typography
          className={classes.info}
          variant="body2"
          color="textSecondary"
          align="justify"
        >
          {description}
        </Typography>
      </div>
    </ListItem>
  );
};
