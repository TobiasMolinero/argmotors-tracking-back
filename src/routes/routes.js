import { Router } from 'express';
import { validate } from '../middlewares/validate.js';
import { crearEnvioSchema, actualizarEnvioSchema } from '../schemas/enviosSchema.js';
import { getEnvio, updateEnvio, createEnvio, deleteEnvio } from '../controllers/enviosController.js';

export const router = Router();

router.get('/:venta', getEnvio);
router.post('/', validate(crearEnvioSchema), createEnvio);
router.patch('/:venta', validate(actualizarEnvioSchema), updateEnvio);
router.delete('/:venta', deleteEnvio);