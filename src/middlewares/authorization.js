import { verifyAccessToken } from "../utils/jwt.js"

export async function authenticateAccessToken(req, res, next) {
    const token = req.cookies['auth-token']

    if(!token) {
        res.clearCookie('token', {
          httpOnly: true,
          secure: true,
          sameSite: 'lax'
        });
        
        return res.status(401).json({ error: 'NO_ACC_TKN', message: 'La sesión expiró. Vuelva a iniciar sesión.' })
    }

    try {
        const payload = verifyAccessToken(token)
        console.log(payload)
        req.user = payload
        next()
    } catch (err) {
        res.clearCookie('token', {
            httpOnly: true,
            secure: true,
            sameSite: 'lax'
        });

        return res.status(403).json({ error: 'NO_ACC_TKN', message: 'La sesión expiró. Vuelva a iniciar sesión.' })
    }
}