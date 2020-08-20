import React from 'react';
import { useParams } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import EmailIcon from '@material-ui/icons/Email';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { TrainerProfileCard } from './TrainerProfileCard/TrainerProfileCard';
import { TrainerProfileSpecialties } from './TrainerProfileSpecialties/TrainerProfileSpecialties';
import { TrainerProfileServiceLocations } from './TrainerProfileServiceLocations/TrainerProfileServiceLocations';
import { TrainerProfileServiceSchedules } from './TrainerProfileServiceSchedules/TrainerProfileServiceSchedules';
import { TrainerProfileReviews } from './TrainerProfileReviews/TrainerProfileReviews';
import { formatRatingValue } from '../../utils/formatters';
import { useStyles } from './TrainerProfile.jss';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
import { Trainer, TrainerServiceLocation, TrainerServiceSchedules } from '../../interfaces/trainer';
// #MOCK-END

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  // #MOCK-START
  const trainer = trainers.find(({ id }) => id === trainerId) as Trainer;
  const trainerEmail = 'name@email.com';
  const trainerWhatsApp = '5551983104940';
  const isFavorite = trainer.rating.value > 4;
  const locations: TrainerServiceLocation[] = [
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
  const allowRemote = trainer.rating.value > 4;
  const schedules: TrainerServiceSchedules = {
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
  const specialties = [
    'Body Building',
    'Body Composition',
    'Body Sculpting',
    'Body Transformation',
    'Boxing',
    'Calisthenics',
    'Core Strength',
    'Cross Training',
    'Cycling',
    'Functional Training',
    'Gymnastics',
    'HIIT',
    'Metafit',
    'Muscular Hypertrophy',
    'Olympic Lifting',
    'Performance',
    'Pilates',
    'Pre-Post Natal',
    'Rehabilitation',
    'Running',
    'Seniors Specific',
    'Sports Specific',
    'Strength and Conditioning',
    'Weight Loss',
    'Wellness',
    'Yoga',
  ];
  // #MOCK-END

  return (
    <div className={classes.container}>
      {/* 
      TrainerProfileBio
      TrainerProfileAvatar
      TrainerProfileName
      */}

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

      <TrainerProfileSpecialties specialties={specialties} />

      <TrainerProfileServiceLocations locations={locations} allowRemote={allowRemote} />

      <TrainerProfileServiceSchedules schedules={schedules} />

      <TrainerProfileReviews />
    </div>
  );
};
