export async function authenticateAccessToken(req, res, next) {
    const authHeader = req.headers['authorization']
    const accessToken = authHeader && authHeader.split(' ')[1]

    if(!accessToken) return res.status(401).json({ error: 'NO_ACC_TKN', message: 'La sesión expiró. Vuelva a iniciar sesión.' })

    try {
        const payload = verifyAccessToken(accessToken)
        req.user = payload
        next()
    } catch (err) {
        return res.status(403).json({ error: 'NO_ACC_TKN', message: 'La sesión expiró. Vuelva a iniciar sesión.' })
    }
}