import { UserModel as User } from "../models/authModel.js";
import { encrypt, verified } from "../utils/encrypt.js";
import { generateAccessToken } from "../utils/jwt.js";

async function registerUser(userData) {
    try {
        const { username, password, role } = userData;
        
        // Validaciones
        if (!username || !password) {
            const error = new Error('Todos los campos son requeridos');
            error.status = 400;
            throw error;
        }
        
        // Verificar si el usuario ya existe
        const existingUser = await User.findOne({ username });
        
        if (existingUser) {
            const error = new Error('El usuario ya existe');
            error.status = 409;
            throw error;
        }

        // Crear usuario
        const passwordHash = await encrypt(password);
        const user = new User({ username, password: passwordHash, role });
        await user.save();
        
        // Retornar sin la contraseña
        return {
            id: user._id,
            username: user.username,
            role: user.role
        };
    } catch (error) {
        throw error;
    }
}

async function login({ username, password }) {
    try {
        const user = await User.findOne({ username })

        if(!user) {
            const error = new Error('Usuario no encontrado');
            error.status = 401;
            throw error;
        }
        
        const isPasswordValid = await verified(password, user.password);

        if(!isPasswordValid) {
            const error = new Error('Contraseña incorrecta');
            error.status = 401;
            throw error;
        }

        const token = generateAccessToken({ user: username })

        return {
            token,
            username,
        }
    } catch (error) {
        throw error;
    }
}

export const AuthService = {
    registerUser,
    login
}