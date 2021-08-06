// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker, rest } from 'msw';
import { db } from './mock-database';

export const mockServer = setupWorker(
  rest.get('/api/v1/trainers', (req, res, ctx) => {
    const name = req.url.searchParams.get('name')?.toLowerCase();
    const trainers = db.trainers.filter((trainer) =>
      name ? trainer.name.toLowerCase().includes(name) : true
    );
    return res(ctx.json(trainers), ctx.delay());
  }),

  rest.get('/api/v1/trainers/:trainerId', (req, res, ctx) => {
    const trainer = db.trainers.find(({ id }) => id === req.params.trainerId);
    return res(ctx.status(trainer ? 200 : 404), ctx.json(trainer), ctx.delay());
  }),

  rest.get('/api/v1/trainers/:trainerId/reviews', (req, res, ctx) => {
    const reviews = db.trainersReviews[req.params.trainerId] ?? [];
    return res(ctx.json(reviews), ctx.delay());
  }),

  rest.get('/api/v1/users/:userId/favorite-trainers', (_req, res, ctx) => {
    const trainers = db.favoriteTrainers.map((id) => db.trainers.find((trainer) => trainer.id === id));
    return res(ctx.json(trainers), ctx.delay());
  }),

  rest.put('/api/v1/users/:userId/favorite-trainers', (req, res, ctx) => {
    const { isFavorite, trainerId } = req.body as any;
    if (isFavorite) {
      db.favoriteTrainers = db.favoriteTrainers.concat(trainerId);
    } else {
      db.favoriteTrainers = db.favoriteTrainers.filter((id) => id !== trainerId);
    }
    return res(ctx.status(200), ctx.delay());
  })
);
