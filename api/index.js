import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import colors from 'colors'
import authRoutes from './routes/auth.routes.js'
import { dbConnection } from './config/dbConn.js'
import cors from 'cors'

const app = express()
app.use(express.json())
dotenv.config()
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}))



app.use('/api/auth', authRoutes)






app.listen(process.env.PORT ,()=>{
    console.log(`--- api/backend is running on ${process.env.PORT} ---`.bgYellow.black)
    dbConnection()
})

app.use((err, req, res, next)=>{
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