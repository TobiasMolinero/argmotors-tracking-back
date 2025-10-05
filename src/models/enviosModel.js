import mongoose from "mongoose";

export const enviosSchema = new mongoose.Schema({
    nro_venta: { type: String, required: true, unique: true },
    hbl: { type: String },
    estado: { type: String },
    contenedor_guia: String,
    fecha_venta: String,
    fecha_envio: String,
    nombre_consignatario: { type: String },
    carnet_identidad: { type: String },
}, { timestamps: true });

export const EnviosModel = mongoose.model('Envios', enviosSchema);