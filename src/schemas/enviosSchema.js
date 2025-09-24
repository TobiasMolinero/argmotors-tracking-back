import zod from 'zod';

export const crearEnvioSchema = zod.object({
    nro_venta: zod.string().min(1, { message: 'El número de venta es obligatorio.' }),
    estado: zod.string().min(1, { message: 'El estado es obligatorio.' }),
    fecha_envio: zod.string().min(1, { message: 'La fecha de envío es obligatoria. ' }),
    hbl: zod.string().min(1, { message: 'El HBL es obligatorio.' }),
    contenedor_guia: zod.string().min(1, { message: 'El contenedor o quía es obligatorio.' }),
    nombre_consignatario: zod.string().min(1, { message: 'El nombre del consignatario es obligatorio.' }),
    carnet_identidad: zod.string().min(1, { message: 'El carnet de identidad es obligatorio.'})
}).strict();

export const actualizarEnvioSchema = crearEnvioSchema.partial();
