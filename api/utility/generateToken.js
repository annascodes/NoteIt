import jwt from 'jsonwebtoken'

export const generateToken = (id, email, res) => {
    const token = jwt.sign({ id, email }, process.env.JWT_KEY)

    res.cookie("access_token", token, {
        httpOnly: true,
        secure: true,         // required for cross-site cookies
        sameSite: "none",     // required for cross-site cookies
        path: "/",
    });

}