import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB conectada');
    } catch (error) {
        console.error("Error al conectar a la DB", error);
        process.exit(1);
    }
}

export default conectarDB;
