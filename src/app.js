import express from "express";
import cors from "cors";
import nacimientosRuta from "./rutas/nacimientos.rutas.js";

const app = express();

app.use(express.json());
app.use(cors())

app.use("/nacimientos/",nacimientosRuta)

   /*  console.log(req.body)  */
   /*  res.send("<h1>Ruta vacia 0</h1>") */
   
app.use((req, res) => {
    res.send("<h1>Error</h1>")
})

export default app;