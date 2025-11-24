import { errHandler } from './error.js'
import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(`token: ${token}`.bgWhite)
    if (!token) return next(errHandler(404, 'access token not found.'))

    jwt.verify(token, process.env.JWT_KEY, (err, user) => {
        if (err) {
            console.log(err)
            return next(errHandler(400, 'err in verifying access token.'))
        }
        req.user = user;
        next()
    })


}