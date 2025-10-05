import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import { crearEnvioSchema, actualizarEnvioSchema } from '../schemas/enviosSchema.js';
import { getEnvio, updateEnvio, updateStatusEnvio, createEnvio, deleteEnvio, all } from '../controllers/enviosController.js';
import { authenticateAccessToken } from '../middlewares/authorization.js';

export const routerEnvios = Router();

routerEnvios.get('/', authenticateAccessToken, all)
routerEnvios.get('/:venta', getEnvio);
routerEnvios.post('/', authenticateAccessToken, validate(crearEnvioSchema), createEnvio);
routerEnvios.patch('/:venta', authenticateAccessToken, validate(actualizarEnvioSchema), updateEnvio);
routerEnvios.patch('/update-status/:venta', authenticateAccessToken, updateStatusEnvio);
routerEnvios.delete('/:venta', authenticateAccessToken, deleteEnvio);