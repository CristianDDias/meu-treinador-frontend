import React from "react";
import { useParams } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Box from "@material-ui/core/Box";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";

const trainer = {
  name: "Cristian Daniel Dias",
  description:
    "Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa. Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa.",
  price: 75,
  rating: {
    value: 4.5,
    reviews: 5,
  },
  img:
    "https://assetbucketdevelopment.blob.core.windows.net/testing/15539755273179878-Male_25.jpg",
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    minHeight: "100%",
    background: theme.palette.background.paper,
  },
  avatar: {
    width: "104px",
    height: "104px",
    marginRight: theme.spacing(1),
  },
  sectionTitle: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
}));

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  console.log(trainerId);

  return (
    <div className={classes.container}>
      <Box display="flex" paddingX={2} paddingTop={2}>
        <Avatar
          className={classes.avatar}
          variant="rounded"
          src={trainer.img}
        />
        <Box
          display="flex"
          flexDirection="column"
          flexBasis={0}
          flexGrow={1}
          justifyContent="center"
        >
          <Typography variant="h6">{trainer.name}</Typography>
          <Rating
            readOnly
            size="small"
            value={trainer.rating.value}
            precision={0.5}
          />
          <Typography variant="caption">
            {trainer.rating.value} ({trainer.rating.reviews} avaliações)
          </Typography>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" padding={2}>
        <Typography className={classes.sectionTitle}>Sobre mim</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" padding={2}>
        <Typography className={classes.sectionTitle}>Qualificações</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" padding={2}>
        <Typography className={classes.sectionTitle}>Especialidades</Typography>
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </Box>

      {/* 
      <div>
        <Accordion elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.sectionTitle}>Sobre mim</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" align="justify">
              {trainer.description}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.sectionTitle}>
              Qualificações
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" align="justify">
              {trainer.description}
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion elevation={0}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography className={classes.sectionTitle}>
              Especialidades
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body2" align="justify">
              {trainer.description}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div> 
      */}
    </div>
  );
};
