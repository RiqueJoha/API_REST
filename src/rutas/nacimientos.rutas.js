import { Router } from "express";

const ruta=Router();

ruta.get("", async (req, res) => {
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
})

ruta.get("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta usada 1</h1>`)
})

ruta.post("/api", (req, res) => {
    console.log(req.query);
    res.status(201).send(`<h1>Ruta para crear un elemento</h1>`)
})

ruta.put("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta para actualizar un elemento</h1>`)
})

ruta.delete("/api", (req, res) => {
    console.log(req.query);
    res.send(`<h1>Ruta para eliminar un elemento</h1>`)
})

ruta.get("/api/:id_padron", async (req, res) => {
    const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", req.params.id_padron);
    /* res.send(`<h1>Ruta usada 2 | id: ${req.params.id}</h1>`) */
    res.json(resultado)
})

ruta.get("/api/:id/:nombre", (req, res) => {
    res.send(`<h1>Ruta usada 3 | id: ${req.params.id} nombre: ${req.params.nombre}</h1>`)
})

export default ruta;