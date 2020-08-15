import React from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { formatRatingValue } from '../../utils/formatters';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
import { Trainer } from '../../interfaces/trainer';
// #MOCK-END

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  card: {
    background: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(2),
    width: '100%',
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  name: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: '1.25rem',
    lineHeight: 1.25,
    marginBottom: theme.spacing(1),
  },
  title: {
    fontWeight: theme.typography.fontWeightMedium,
    marginBottom: theme.spacing(1),
  },
  favoriteButton: {
    background: '#ffffff',
    position: 'absolute',
    right: 0,
    transform: 'translateX(50%)',
    padding: theme.spacing(1),
    zIndex: theme.zIndex.appBar,
  },
  contactButton: {
    padding: theme.spacing(1),
    margin: theme.spacing(0, 1),
  },
  specialities: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
      color: theme.palette.primary.main,
      background: `${theme.palette.primary.main}26`,
    },
  },
}));

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  // #MOCK-START
  const trainer = trainers.find(({ id }) => id === trainerId) as Trainer;
  const isFavorite = trainer.rating.value > 4;
  // #MOCK-END

  return (
    <div className={classes.container}>
      <Box className={classes.card} display="flex" flexDirection="column" alignItems="center">
        <Box position="relative">
          <IconButton className={classes.favoriteButton} color="primary">
            {isFavorite ? (
              <FavoriteIcon fontSize="large" />
            ) : (
              <FavoriteBorderIcon fontSize="large" />
            )}
          </IconButton>
          <Avatar className={classes.avatar} variant="rounded" src={trainer.img} />
        </Box>
        <Box display="flex">
          <IconButton
            className={classes.contactButton}
            color="primary"
            href="https://wa.me/5551987654321"
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.contactButton}
            color="primary"
            href="mailto:name@email.com"
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography className={classes.name}>{trainer.name}</Typography>
        <Box display="flex">
          <Rating readOnly size="small" value={trainer.rating.value} precision={0.5} />
          <Typography variant="body2">
            {formatRatingValue(trainer.rating.value)} ({trainer.rating.reviews} avaliações)
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

        {/* 

        yellow
          background-color: rgb(255, 244, 229);
          color: #ff9800;

        red
          background-color: #fdecea;
          color: #f44336;

        blue
          background-color: rgb(232, 244, 253);
          color: #2196f3;

        green
          background-color: rgb(237, 247, 237);
          color: #4caf50;

        */}

        <div className={classes.specialities}>
          <Chip label="Body Building" />
          <Chip label="Body Composition" />
          <Chip label="Body Sculpting" />
          <Chip label="Body Transformation" />
          <Chip label="Boxing" />
          <Chip label="Calisthenics" />
          <Chip label="Core Strength" />
          <Chip label="Cross Training" />
          <Chip label="Cycling" />
          <Chip label="Functional Training" />
          <Chip label="Gymnastics" />
          <Chip label="HIIT" />
          <Chip label="Metafit" />
          <Chip label="Muscular Hypertrophy" />
          <Chip label="Olympic Lifting" />
          <Chip label="Performance" />
          <Chip label="Pilates" />
          <Chip label="Pre-Post Natal" />
          <Chip label="Rehabilitation" />
          <Chip label="Running" />
          <Chip label="Seniors Specific" />
          <Chip label="Sports Specific" />
          <Chip label="Strength and Conditioning" />
          <Chip label="Weight Loss" />
          <Chip label="Wellness" />
          <Chip label="Yoga" />
        </div>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Locais de treinamento</Typography>
        <Typography variant="body2" align="justify">
          MAP
        </Typography>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Horários de atendimento</Typography>
        <Typography variant="body2" align="justify">
          <div>Segunda - 06:00 - 08:00 | 11:00 - 15:00 | 19:00 - 22:00</div>
          <div>Terça - 08:00 - 22:00</div>
          <div>Quarta - 06:00 - 21:00</div>
          <div>Quinta - 06:00 - 08:00 | 11:00 - 15:00</div>
          <div>Sexta - 07:00 - 21:00</div>
          <div>Sábado - Informe-se sobre a disponibilidade</div>
          <div>Domingo - Informe-se sobre a disponibilidade</div>
        </Typography>
      </Box>

      <Box className={classes.card} display="flex" flexDirection="column">
        <Typography className={classes.title}>Avaliações</Typography>
        <Typography variant="body2" align="justify">
          Tudo certo!
        </Typography>
      </Box>
    </div>
  );
};
