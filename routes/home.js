import express from 'express';
const Router = express.Router();
import { home } from '../controllers/home.js';

export const homeRouter = Router.get('/', home);
