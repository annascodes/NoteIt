import jwt from 'jsonwebtoken'

export const generateToken = (id, email, res) => {
    const token = jwt.sign({ id, email }, process.env.JWT_KEY)

    const isProduction = process.env.NODE_ENV === 'production';
    res.cookie("access_token", token, {
        httpOnly: true,
        // secure: true,         // required for cross-site cookies
        secure: isProduction,         // required for cross-site cookies
        // sameSite: "none",     // required for cross-site cookies
        sameSite: isProduction ? "none" : "Lax",     // required for cross-site cookies
        path: "/",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days (example)
    });

}