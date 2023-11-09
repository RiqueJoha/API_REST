import express from "express";
import cors from "cors";
import pool from "./conexionDB.js";
import nacimientosRuta from "./rutas/nacimientos.rutas.js";
import configuracion from "./configuración.js";

const app = express();

app.use(express.json());
app.use(cors())

app.use(nacimientosRuta)

   /*  console.log(req.body)  */
   /*  res.send("<h1>Ruta vacia 0</h1>") */
   



app.listen(configuracion.PORT, () => {
    console.log("Servidor Iniciado en", configuracion.PORT);
});

app.use((req, res) => {
    res.send("<h1>Error</h1>")
})