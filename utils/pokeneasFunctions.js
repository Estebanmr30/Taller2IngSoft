import { pokeneas } from './pokeneasExamples.js';

export const getRandomPokenea = () => {
  const randomIndex = Math.floor(Math.random() * pokeneas.length);
  return pokeneas[randomIndex];
};
