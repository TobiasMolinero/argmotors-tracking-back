import { AuthService } from "../services/authService.js";

export const register = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await AuthService.registerUser(userData);
        
        res.status(201).json({
            success: true,
            message: 'Usuario registrado exitosamente',
            data: newUser
        });
    } catch (error) {
        next(error);
    }
}

export async function login(req, res, next) {
    try {
        const { username, password } = req.body;
        
        const result = await login({ username, password });
        
        res.status(200).json({
            success: true,
            data: result
        });
    } catch (error) {
        next(error); // Pasa al middleware de manejo de errores
    }
}