import express from 'express';
import cors from 'cors';

const app = express();
const port = 3333;
app.use(cors())
app.use(express.json())

app.listen(port, () => {
    console.log("API Iniciada")
})

app.get('/', (req, res) => {
    console.log("HOME")
    res.send("API - Aprendizado")
})

app.post('/postarassembleia', (req, res) => {
    console.log(req.body)
})