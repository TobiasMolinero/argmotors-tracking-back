import { hash, compare } from 'bcrypt';

// Crear el hash para la contraseña.
export const encrypt = async(password) => {
    const passHash = await hash(password, 8);
    return passHash;
}

// Verifica que la contraseña coincida con el hash que se creo anteriormente.
export const verified = async(password, passwordHash) => {
    const verify = await compare(password, passwordHash);
    return verify;
}