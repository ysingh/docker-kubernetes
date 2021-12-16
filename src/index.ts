import express from 'express';
import './config';

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send(`Hello ${req}`);
});

app.listen(port, () => console.log(`🚀🚀🚀 App listening on port: ${port}`));

