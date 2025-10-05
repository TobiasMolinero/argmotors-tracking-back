import zod from 'zod';

export const crearEnvioSchema = zod.object({
    nro_venta: zod.string().min(1, { message: 'El número de venta es obligatorio.' }),
    estado: zod.string(),
    fecha_venta: zod.string(),
    fecha_envio: zod.string(),
    hbl: zod.string(),
    contenedor_guia: zod.string(),
    nombre_consignatario: zod.string(),
    carnet_identidad: zod.string()
}).strict();

export const actualizarEnvioSchema = crearEnvioSchema.partial();
