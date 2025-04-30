import { getRandomPokenea } from '../utils/pokeneasFunctions.js';
import os from 'os';

export const info = (request, response) => {
  const pokenea = getRandomPokenea();
  const data = { id: pokenea.id, name: pokenea.name, height: pokenea.height, ability: pokenea.ability };
  response.send(data);
};

export const extraInfo = (request, response) => {
  const pokenea = getRandomPokenea();
  const data = { image: pokenea.image, phrase: pokenea.phrase, container: os.hostname() };
  response.render('extraData', { data });
};
