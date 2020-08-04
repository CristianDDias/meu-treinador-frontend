import { Trainer } from "../interfaces/trainer";

export const trainers: Trainer[] = Array.from(Array(10), (_, index) => ({
  id: `${index + 1}`,
  name: `Trainer Trainer ${index + 1}`,
  description: "Especializado em treinos de hipertrofia. Pós-graduado em alguma coisa.",
  price: 75 + index * 5,
  rating: {
    value: 4.5,
    reviews: 5 + index,
  },
  img: "https://assetbucketdevelopment.blob.core.windows.net/testing/15539755273179878-Male_25.jpg",
}));
