
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

//A
app.get('/', (req, res) => { // EndPoint "/"
res.send('Ya estoy respondiendo!');
})

app.get('/saludar/:nombre', (req, res) => { // EndPoint "/saludar"
let nombre=req.params.nombre
res.status(200).send(`Hola ${nombre}`);
})

app.get("/validarfecha/:ano/:mes/:dia", (req, res) => { 
    let mes=req.params.mes
    let ano=req.params.ano
    let dia=req.params.dia

    let fechaStr = `${ano}-${mes}-${dia}`;
    let fecha = Date.parse(fechaStr);

    if (isNaN(fecha)) {
        res.status(400).send("BAD REQUEST");
    } else {
        res.status(200).send("OK");
    }
    
    })

    //B
    app.get("/matematica/sumar", (req, res) => {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
      
        if (isNaN(n1) || isNaN(n2)) {
          return res.status(400).send("Parámetros inválidos");
        }
      
        const resultado = sumar(n1, n2);
        res.status(200).send(`Resultado: ${resultado}`);
      });

      
    app.get("/matematica/restar", (req, res) => {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
      
        if (isNaN(n1) || isNaN(n2)) {
          return res.status(400).send("Parámetros inválidos");
        }
      
        const resultado = restar(n1, n2);
        res.status(200).send(`Resultado: ${resultado}`);
      });

      app.get("/matematica/multiplicar", (req, res) => {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
      
        if (isNaN(n1) || isNaN(n2)) {
          return res.status(400).send("Parámetros inválidos");
        }
      
        const resultado = multiplicar(n1, n2);
        res.status(200).send(`Resultado: ${resultado}`);
      });


      app.get("/matematica/dividir", (req, res) => {
        const n1 = parseFloat(req.query.n1);
        const n2 = parseFloat(req.query.n2);
      
        if (isNaN(n1) || isNaN(n2)) {
          return res.status(400).send("Parámetros inválidos");
        }
      
        const resultado = dividir(n1, n2);
        res.status(200).send(`Resultado: ${resultado}`);
      });

//C
app.get('/omdb/searchbypage', async (req, res) => {
 
    let resultado = await metodoAsincronico();

    })
//
// Inicio el Server y lo pongo a escuchar.
//
app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})