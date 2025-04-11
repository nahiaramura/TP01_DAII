
import express from "express"; // hacer npm i express
import cors from "cors"; // hacer npm i cors
const app = express();
const port = 3000; // El puerto 3000 (http://localhost:3000)
// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON
//
// Aca pongo todos los EndPoints
//
app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
let nombre=req.params.nombre
res.status(200).send(`Hola ${nombre}`);
})

app.get("/validarfecha/:ano/:", (req, res) => { // EndPoint "/saludar"
    let mes=req.params.mes
    let ano=req.params.ano
    let dia=req.params.dia

    fecha=Date.parse;

    if(fecha=isNaN)
    {
        res.status(400).send(`BAD REQUEST`);
    }
    else{
        res.status(200).send(`OK`);
    }
    
    })
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})