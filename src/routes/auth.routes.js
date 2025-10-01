import { Router } from 'express';
import { login, register } from '../controllers/authController.js';

export const routerAuth = Router();

routerAuth.post('/login', login)
routerAuth.post('/register', register)