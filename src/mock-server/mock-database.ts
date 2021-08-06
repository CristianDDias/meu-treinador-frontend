import trainersJSON from './trainers.json';

export const db = {
  trainers: trainersJSON,
  trainersReviews: {
    [trainersJSON[0].id]: [
      {
        id: 'b163e7aa-fd48-4851-8c67-c75833c08439',
        author: 'Lisa Marquardt',
        rating: 3.2,
        description:
          'Nihil quia repellat in quibusdam quasi vitae maiores quas. Perspiciatis in aut exercitationem asperiores. Et fugiat sint quaerat illo quidem error. In nam accusamus corrupti.',
        createdAt: '2020-11-08T13:46:00.533Z',
      },
      {
        id: 'd79baf45-f7e7-4315-9122-74a5ac84a268',
        author: 'Victor Jaskolski',
        rating: 4.0,
        description:
          'Porro deserunt odio eaque eum. Sunt tempora consectetur dolorem mollitia harum. Vitae velit consequatur cumque consectetur et qui velit velit necessitatibus. Et nobis sit ut. Aliquid doloribus a autem quia molestiae. Optio nam non dolores quis inventore ut.',
        createdAt: '2020-10-22T20:22:54.669Z',
      },
    ],
    [trainersJSON[1].id]: [
      {
        id: '4075bcd2-c0bf-4f9d-bd1e-25dfd3831e7b',
        author: 'Tate Rutherford',
        rating: 3.3,
        description:
          'Officia quam ea dolore optio quia officia. Sint aut sed ex et qui quidem doloribus et. In ullam sunt voluptatibus. Et sed est debitis similique.',
        createdAt: '2021-06-10T11:22:09.517Z',
      },
      {
        id: '99372f3d-9153-47ff-ac49-bca6fba31c91',
        author: 'Alva Baumbach',
        rating: 4.1,
        description:
          'Molestiae ut nam aut. Animi vitae nemo occaecati neque. Corporis ipsam magnam fugiat quod sint ex nam veniam id. Error quidem eos et dicta et quis inventore dolorem. Dolore laboriosam nam soluta ipsum necessitatibus autem omnis aut. Voluptatem vero earum.',
        createdAt: '2020-09-10T12:25:47.279Z',
      },
    ],
  },
  favoriteTrainers: [trainersJSON[0].id, trainersJSON[1].id],
};
