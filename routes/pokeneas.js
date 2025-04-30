import express from 'express';
import { info, extraInfo } from '../controllers/pokeneas.js';
const Router = express.Router();

export const infoRouter = Router.get('/info', info).get('/extraInfo', extraInfo);
