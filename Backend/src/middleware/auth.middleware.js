import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    try{
        const token = req.cookies.token

        if (!token) {
            return res.status(401).json(
                {
                    message: "Unauthorized - token not provided"
                }
            )
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.userId = decoded.userId

        next()
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: "Token expireds"
            })
        }

        return res.status(401).json({
            message: "Invalid token"
        })
    }
}