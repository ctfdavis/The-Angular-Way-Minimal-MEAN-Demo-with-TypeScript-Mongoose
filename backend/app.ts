import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.listen(3000, () => {
    console.log('Server is up on port ' + port)
})
