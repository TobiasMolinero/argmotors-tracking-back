import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from './routes/routes.js';
import conectarDB from './db/db.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(compression())
app.use(morgan('dev'));
app.use(cors({
    origin: "https://international-tracking.vercel.app",
    methods: ["GET", "POST", "PATCH"]
}));

conectarDB();

app.use('/envios', router)

export default app;