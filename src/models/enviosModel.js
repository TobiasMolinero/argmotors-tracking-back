import mongoose from "mongoose";

export const enviosSchema = new mongoose.Schema({
    nro_venta: { type: String, required: true, unique: true },
    hbl: { type: String, required: true },
    estado: { type: String, required: true },
    contenedor_guia: String,
    fecha_envio: String,
    nombre_consignatario: { type: String, required: true},
    carnet_identidad: { type: String, required: true},
}, { timestamps: true });

export const EnviosModel = mongoose.model('Envios', enviosSchema);