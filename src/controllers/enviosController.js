// import { EnviosService } from "../services/enviosService.js";
import { EnviosService } from "../services/enviosMongoService.js";

export const all = async (req, res) => {
    const envios = await EnviosService.all();

    if(!envios) return res.status(404).json({ message: 'Envios no encontrados.'})

    res.json({ datos: envios })
} 

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
    
        res.status(201).json({ datos: newEnvio , message: 'Envio creado correctamente.'});
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: error.message });
    }
}

export const updateEnvio = async (req, res) => {
    const { venta } = req.params;
    const envio = req.body;

    const updatedEnvio = await EnviosService.updateEnvio(venta);

    if(!updatedEnvio) return res.status(404).json({ message: 'Envio no encontrado.'});

    res.json({ datos: [updatedEnvio], message: 'Envio actualizado correctamente.' });
}

export const updateStatusEnvio = async (req, res) => {
    const { venta } = req.params;
    
    const updatedStatus = await EnviosService.updateStatusEnvio(venta);
    
    if(!updatedStatus) return res.status(404).json({ message: 'Envio no encontrado o no se pudo actualizar el estado.'});

    res.json({
        success: true,
        message: 'Estado del envio actualizado correctamente.',
    })
}

export const deleteEnvio = async(req, res) => {
    const { venta } = req.params;
    const deletedEnvio = await EnviosService.deleteEnvio(venta);

    if(!deletedEnvio) return res.status(404).json({ message: 'Envio no encontrado.'});

    res.json({ datos: [deletedEnvio], message: 'Este envio fue eliminado correctamente' });
}