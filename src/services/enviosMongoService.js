import { EnviosModel as Envios } from '../models/enviosModel.js';

function all() {
    const envios = Envios.find({})

    if(!envios) return false;

    return envios;
}

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
            throw new Error('El número de venta ya existe.');
        }

        throw error;
    }
}

function updateEnvio(nro_venta, envio) {
    const updatedEnvio = Envios.findOneAndUpdate({ nro_venta }, envio, { new: true });

    if(!envio) return false;

    return updatedEnvio;
}

async function updateStatusEnvio(nro_venta) {
    try {
        const envio = await Envios.findOne({ nro_venta });

        const fechaVenta = new Date(envio.fecha_venta);
        const hoy = new Date();
        const dias = Math.floor((hoy - fechaVenta) / (1000 * 60 * 60 * 24));

        let nuevoEstado = "";
        if (dias >= 1 && dias <= 5) nuevoEstado = "En bodega";
        else if (dias >= 6 && dias <= 11) nuevoEstado = "Empresa de envíos";
        else if (dias >= 12 && dias <= 20) nuevoEstado = "En tránsito a Cuba";
        else if (dias >= 21 && dias <= 51) nuevoEstado = "En puerto Mariel";
        else if (dias >= 52 && dias <= 62) nuevoEstado = "Esperando transporte de agencia";
        else if (dias >= 63 && dias <= 73) nuevoEstado = "Aduana - próximo a proceso";
        else if (dias >= 74 && dias <= 80) nuevoEstado = "Contenedor abierto - Rayos X";
        else if (dias >= 81 && dias <= 86) nuevoEstado = "Contenedor abierto - Unidad canina";
        else if (dias >= 87 && dias <= 96) nuevoEstado = "Proceso de desagrupe";
        else if (dias > 96) nuevoEstado = "Próximo a entrega";
        
        envio.estado = nuevoEstado;
        await envio.save();

        return nuevoEstado;
    } catch (error) {
        return false
    }
}

function deleteEnvio(nro_venta) {
    const envio = Envios.findOneAndDelete({ nro_venta })

    if(!envio) return false;

    return envio;
}

export const EnviosService = {
    all,
    getEnvio,
    createEnvio,
    updateEnvio,
    updateStatusEnvio,
    deleteEnvio,
}