import { EnviosModel as Envios } from '../models/enviosModel.js';

function getEnvio(nro_venta) {
    const envio = Envios.findOne({ nro_venta });

    if(!envio) return false;

    return envio;
}

async function createEnvio(envio) {
    try {
        const newEnvio = await Envios.create(envio);
        return newEnvio;
    } catch (error) {
        if(error.code === 11000) {
            throw new Error('El número de venta o HBL ya existe.');
        }

        throw error;
    }
}

function updateEnvio(nro_venta, estado) {
    const envio = Envios.findOneAndUpdate({ nro_venta }, { estado }, { new: true });

    if(!envio) return false;

    return envio;
}

function deleteEnvio(nro_venta) {
    const envio = Envios.findOneAndDelete({ nro_venta })

    if(!envio) return false;

    return envio;
}

export const EnviosService = {
    getEnvio,
    createEnvio,
    updateEnvio,
    deleteEnvio,
}