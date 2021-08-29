import connect from './db/connect';
import express from 'express';
import CounterRouter from './routers/counter.router';

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.use('/api', CounterRouter);


app.listen(3000, () => {
    console.log('Server is up on port ' + port)
    connect();
})
