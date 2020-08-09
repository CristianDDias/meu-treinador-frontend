import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

import trainers from "../../__mocks__/trainers.json";
import { Trainer } from "../../interfaces/trainer";

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    "& > :not(:last-child)": {
      marginBottom: theme.spacing(2),
    },
  },
  card: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: "100%",
  },
  avatar: {
    width: "100px",
    height: "100px",
    marginRight: theme.spacing(1),
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: theme.typography.fontWeightMedium,
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
}));

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  const trainer = trainers.find(
    (trainer) => trainer.id === trainerId
  ) as Trainer;

  return (
    <div className={classes.container}>
      <Box className={classes.card} display="flex">
        <Avatar
          className={classes.avatar}
          variant="rounded"
          src={trainer.img}
        />
        <Box display="flex" flexDirection="column" justifyContent="center">
          <Typography className={classes.name}>{trainer.name}</Typography>
          <Rating
            readOnly
            size="small"
            value={trainer.rating.value}
            precision={0.5}
          />
          <Typography variant="body2">
            {trainer.rating.value} ({trainer.rating.reviews} avaliações)
          </Typography>
        </Box>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Sobre mim</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Qualificações</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Especialidades</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>
    </div>
  );
};
