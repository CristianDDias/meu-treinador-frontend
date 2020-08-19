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
import { TrainerProfileCard } from './TrainerProfileCard/TrainerProfileCard';
import { TrainerProfileServiceLocations } from './TrainerProfileServiceLocations/TrainerProfileServiceLocations';
import { TrainerProfileServiceSchedules } from './TrainerProfileServiceSchedules/TrainerProfileServiceSchedules';
import { formatRatingValue } from '../../utils/formatters';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
import { Trainer, TrainerServiceLocation, TrainerServiceSchedules } from '../../interfaces/trainer';
// #MOCK-END

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    padding: theme.spacing(2),
    '& > :not(:last-child)': {
      marginBottom: theme.spacing(2),
    },
  },
  avatar: {
    width: '200px',
    height: '200px',
  },
  name: {
    fontSize: '1.5rem',
    fontWeight: theme.typography.fontWeightMedium,
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
  rating: {
    marginRight: theme.spacing(1),
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
  const trainerEmail = 'name@email.com';
  const trainerWhatsApp = '5551987654321';
  const isFavorite = trainer.rating.value > 4;
  const trainerLocations: TrainerServiceLocation[] = [
    {
      id: '1',
      city: 'Sapiranga',
      state: 'RS',
      places: ['Corpus', 'Physical', 'Pro Fit'],
    },
    {
      id: '2',
      city: 'Novo Hamburgo',
      state: 'RS',
      places: ['Arena', 'Line', 'Platoon'],
    },
  ];
  const trainerAllowRemote = trainer.rating.value > 4;
  const trainerSchedules: TrainerServiceSchedules = {
    monday: {
      startTime: '08:00',
      endTime: '22:00',
    },
    tuesday: {
      startTime: '08:00',
      endTime: '22:00',
    },
    wednesday: {
      startTime: '08:00',
      endTime: '22:00',
    },
    thursday: {
      startTime: '08:00',
      endTime: '22:00',
    },
    friday: {
      startTime: '08:00',
      endTime: '22:00',
    },
    saturday: {
      startTime: '09:00',
      endTime: '12:00',
    },
    sunday: {
      startTime: '09:00',
      endTime: '12:00',
    },
  };
  // #MOCK-END

  return (
    <div className={classes.container}>
      <TrainerProfileCard alignItemsCenter>
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
            href={`https://wa.me/${trainerWhatsApp}`}
          >
            <WhatsAppIcon fontSize="large" />
          </IconButton>
          <IconButton
            className={classes.contactButton}
            color="primary"
            href={`mailto:${trainerEmail}`}
          >
            <EmailIcon fontSize="large" />
          </IconButton>
        </Box>
        <Typography className={classes.name}>{trainer.name}</Typography>
        <Box display="flex">
          <Rating
            className={classes.rating}
            value={trainer.rating.value}
            precision={0.5}
            size="small"
            readOnly
          />
          <Typography variant="body2">
            {formatRatingValue(trainer.rating.value)} ({trainer.rating.reviews} avaliações)
          </Typography>
        </Box>
      </TrainerProfileCard>

      <TrainerProfileCard title="Sobre mim">
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </TrainerProfileCard>

      <TrainerProfileCard title="Qualificações">
        <Typography variant="body2" align="justify">
          {trainer.description}
        </Typography>
      </TrainerProfileCard>

      <TrainerProfileCard title="Especialidades">
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
      </TrainerProfileCard>

      <TrainerProfileServiceLocations
        locations={trainerLocations}
        allowRemote={trainerAllowRemote}
      />

      <TrainerProfileServiceSchedules schedules={trainerSchedules} />

      <TrainerProfileCard title="Avaliações">
        <Typography variant="body2" align="justify">
          Tudo certo!
        </Typography>
      </TrainerProfileCard>
    </div>
  );
};
