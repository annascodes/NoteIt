import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import colors from 'colors'
import authRoutes from './routes/auth.routes.js'
import noteRoutes from './routes/note.routes.js'
import { dbConnection } from './config/dbConn.js'
import cors from 'cors'

dotenv.config()
const app = express()

app.use(cors({
    origin: [
       process.env.CLIENT_URL,
        // "http://127.0.0.1:5173", // not working
    ],
    credentials: true,
}))
app.use(express.json())
app.use(cookieParser())




app.use((req, res, next) => {
  console.log(`cookies in every request:`.bgWhite);
  console.log(req.cookies)
  next();
});
app.use('/api/auth', authRoutes)
app.use('/api/note', noteRoutes)






app.listen(process.env.PORT, () => {
    console.log(`--- api/backend is running on ${process.env.PORT} ---`.bgYellow.black)
    dbConnection()
})

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || '--server error--';
    res.status(statusCode).json(
        {
            success: false,
            statusCode,
            message,
        }
    )
})