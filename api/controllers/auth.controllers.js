import User from "../models/user.model.js";
import { errHandler } from "../utility/error.js";
import bcrypt from 'bcryptjs'

export const signup = async (req, res, next) => {
    console.log(` -- auth.controllers.js / signup --`.bgWhite)
    try {
        const {email, password} = req.body;
        if(!email || !password || email.trim() ==='' || password.trim() ==='')
            return next(errHandler(400, 'Email or password is not valid. '))

        const userExist = await User.findOne({email})
        if(userExist) return next(errHandler(401, 'Email already taken.'))

        const hashedPass = bcrypt.hashSync(password, 10);

        const newUser = await User({
            username: email.split('@')[0],
            email: email,
            password: hashedPass,

        })
        if(newUser) await newUser.save();

        res.status(200).json(newUser)

    } catch (error) {
        next(error)

    }
}