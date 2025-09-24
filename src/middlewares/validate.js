export const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    
    if(!result.success) {
        console.log(result.error)
        return res.status(400).json({
            error: 'INVALID_DATA',
            message: result.error.errors.map(e => e.message).join(', ')
        })
    }

    req.body = result.data;
    next();
}