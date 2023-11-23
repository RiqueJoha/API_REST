import express from "express";
import cors from "cors";
import nacimientosRuta from "./rutas/nacimientos.rutas.js";

const app = express();

const urlPermitidas=["http://127.0.0.1:5500/"];

app.use(express.json({
    origin: (origin, callback) => {
        console.log(origin);
        if (urlPermitidas.includes(origin)||!origin) {
            callback(null,true);
        } else{
            const error=new Error("Error no permitido por CORS");
            error.status=401;
            callback("Error Cors",false);
        }   
    }
}));
app.use(cors())

app.use("/nacimientos/", nacimientosRuta)

/*  console.log(req.body)  */
/*  res.send("<h1>Ruta vacia 0</h1>") */

app.use((req, res) => {
    res.send("<h1>Error</h1>")
})

export default app;