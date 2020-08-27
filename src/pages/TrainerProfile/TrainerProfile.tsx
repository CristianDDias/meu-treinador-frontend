import React from 'react';
import { useParams } from 'react-router-dom';
import { TrainerProfileAvatar } from './TrainerProfileAvatar/TrainerProfileAvatar';
import { TrainerProfileInfo } from './TrainerProfileInfo/TrainerProfileInfo';
import { TrainerProfileSpecialties } from './TrainerProfileSpecialties/TrainerProfileSpecialties';
import { TrainerProfileServiceLocations } from './TrainerProfileServiceLocations/TrainerProfileServiceLocations';
import { TrainerProfileServiceSchedules } from './TrainerProfileServiceSchedules/TrainerProfileServiceSchedules';
import { TrainerProfileReviews } from './TrainerProfileReviews/TrainerProfileReviews';
import { useStyles } from './TrainerProfile.jss';

// #MOCK-START
import trainers from '../../__mocks__/trainers.json';
import {
  Trainer,
  TrainerServiceLocation,
  TrainerServiceSchedules,
  TrainerReview,
} from '../../interfaces/trainer';
// #MOCK-END

export const TrainerProfile = () => {
  const classes = useStyles();
  const { trainerId } = useParams<{ trainerId: string }>();

  // #MOCK-START
  const trainer = trainers.find(({ id }) => id === trainerId) as Trainer;
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
  const reviews: TrainerReview[] = [
    {
      id: '1',
      name: 'Cristian Dias',
      rating: 4.5,
      description:
        'Ratione qui quo sit dolorem aut praesentium quasi recusandae. Neque consequatur modi cum aliquid. Iusto mollitia neque labore mollitia exercitationem dolores voluptatem magni velit.',
    },
    {
      id: '2',
      name: 'Daniel Zad',
      rating: 4.0,
      description: 'Sed ad dolor adipisci excepturi eveniet. ',
    },
    {
      id: '3',
      name: 'Fulano da Silva',
      rating: 3.5,
      description:
        'Praesentium officia dolores aut laudantium explicabo itaque ullam ullam ut. Nesciunt voluptas nostrum quasi.',
    },
  ];
  // #MOCK-END

  return (
    <div className={classes.container}>
      <TrainerProfileAvatar trainer={trainer} />

      <TrainerProfileInfo title="Sobre mim" text={trainer.description} />

      <TrainerProfileInfo title="Qualificações" text={trainer.description} />

      <TrainerProfileSpecialties specialties={specialties} />

      <TrainerProfileServiceLocations locations={locations} allowRemote={allowRemote} />

      <TrainerProfileServiceSchedules schedules={schedules} />

      <TrainerProfileReviews reviews={reviews} />
    </div>
  );
};
