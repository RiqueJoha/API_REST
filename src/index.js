import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";

const app = express();

app.use(express.json());
app.use(cors())

app.get("", async (req, res) => {
    try {
        const [resultado] = await pool.query("SELECT * FROM nacimientos ");
        console.log(resultado);
        res.json(resultado)
    }catch(error){
        res.status(500).json(
            {
                informe:"Algo salio mal",
                error: error
            }
        )
    }

   /*  console.log(req.body)  */
   /*  res.send("<h1>Ruta vacia 0</h1>") */
   
})

app.get("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta usada 1</h1>`)
})

app.post("/api", (req, res) => {
    console.log(req.query);
    res.status(201).send(`<h1>Ruta para crear un elemento</h1>`)
})

app.put("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta para actualizar un elemento</h1>`)
})

app.delete("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta para eliminar un elemento</h1>`)
})

app.get("/api/:id_padron", async (req, res) => {
    const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", req.params.id_padron);
    /* res.send(`<h1>Ruta usada 2 | id: ${req.params.id}</h1>`) */
    res.json(resultado)
})

app.get("/api/:id/:nombre", (req, res) => {
    res.send(`<h1>Ruta usada 3 | id: ${req.params.id} nombre: ${req.params.nombre}</h1>`)
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor Iniciado en", process.env.PORT || 3000);
});

app.use((req, res) => {
    res.send("<h1>Error</h1>")
})