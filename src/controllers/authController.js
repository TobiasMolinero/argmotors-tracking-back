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
        const result = await AuthService.login({ username, password });
        
        res.cookie('auth-token', result.token, {
            httpOnly: true,    // No accesible desde JavaScript (más seguro)
            secure: true,      // Solo HTTPS en producción
            sameSite: 'lax',   // Protección CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días
        })

        res.status(200).json({
            success: true,
            data: {
                username: result.username
            }
        });
    } catch (error) {
        next(error); // Pasa al middleware de manejo de errores
    }
}