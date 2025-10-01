import express from 'express';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import { routerEnvios } from './routes/envios.routes.js';
import { routerAuth } from './routes/auth.routes.js';
import conectarDB from './db/db.js';
import { errorHandler } from './middlewares/errorHandler.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(compression())
app.use(morgan('dev'));

app.use(cors({
    origin: [
        process.env.FRONT_URL,
        "http://localhost:4321"
    ],
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    // credentials: true,
    // allowedHeaders: ["Content-Type", "Authorization"]
}));

conectarDB();

app.use('/auth', routerAuth);
app.use('/envios', routerEnvios);

app.use(errorHandler);

export default app;