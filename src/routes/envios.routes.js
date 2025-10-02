import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import { crearEnvioSchema, actualizarEnvioSchema } from '../schemas/enviosSchema.js';
import { getEnvio, updateEnvio, createEnvio, deleteEnvio, all } from '../controllers/enviosController.js';

export const routerEnvios = Router();

routerEnvios.get('/', all)
routerEnvios.get('/:venta', getEnvio);
routerEnvios.post('/', validate(crearEnvioSchema), createEnvio);
routerEnvios.patch('/:venta', validate(actualizarEnvioSchema), updateEnvio);
routerEnvios.delete('/:venta', deleteEnvio);