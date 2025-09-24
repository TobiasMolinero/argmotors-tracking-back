// import { EnviosService } from "../services/enviosService.js";
import { EnviosService } from "../services/enviosMongoService.js";

export const getEnvio = async (req, res) => {
    const { venta } = req.params;
    const envio = await EnviosService.getEnvio(venta);
    
    if(!envio) return res.status(404).json({ message: 'Envio no encontrado.'});

    res.json({ datos: [envio] });
}

export const createEnvio = async (req, res) => {
    try {
        const envio = req.body;
        const newEnvio = await EnviosService.createEnvio(envio);
    
        if(!newEnvio) return res.status(400).json({ message: 'No se pudo crear el envio.'});
    
        res.status(201).json({ datos: newEnvio });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateEnvio = async (req, res) => {
    const { venta } = req.params;
    const { estado } = req.body;

    const updatedEnvio = await EnviosService.updateEnvio(venta, estado);

    if(!updatedEnvio) return res.status(404).json({ message: 'Envio no encontrado.'});

    res.json({ datos: [updatedEnvio] });
}