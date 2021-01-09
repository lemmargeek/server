import express, { json } from 'express';
import morgan from 'morgan';
import r_cliente from './routes/r_cliente';
import r_sesion from './routes/r_sesion';

const app = express();

app.use(morgan('dev'))
app.use(json());

app.use('/api/cliente', r_cliente);
app.use('/api/sesion', r_sesion);

export default app;