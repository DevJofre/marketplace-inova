import { NextFunction, Request, Response } from "express"
import { findUserByToken } from "../repository/authentication.repository"
import { decodeToken } from "../utils/jwt.utils"
import { setLoggedUser } from "../utils/global.utils"

const AuthMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const xtoken = req.headers['x-token']
    if (!xtoken) throw new Error('token is required')
    
    const isValidToken = decodeToken(String(xtoken))
    if (!isValidToken) throw new Error('token invalid')

    const user = await findUserByToken(String(xtoken))
    if (!user) throw new Error('token not found')

    setLoggedUser(String(user._id))
    next()
}




export default AuthMiddleware