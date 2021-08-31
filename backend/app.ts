import connect from './db/connect';
import express, { RequestHandler } from 'express';
import cors from 'cors';
import CounterRouter from './routers/counter.router';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());
// app.use(cors());
app.options('*', cors() as RequestHandler) // include before delete route

app.use('/api', cors() as RequestHandler, CounterRouter);


app.listen(3000, () => {
    console.log('Server is up on port ' + port)
    connect();
})
