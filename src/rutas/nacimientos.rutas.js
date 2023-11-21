import { Router } from "express";
import nacimientosControladores from "../controladores/nacimientos.controladores.js";

const ruta=Router();

ruta.get("", nacimientosControladores.obtenerNacimientos);

/* ruta.get("/api", ); */

ruta.post("", nacimientosControladores.crearNacimientos);

ruta.put("/:id_padron",  nacimientosControladores.actualizarNacimientos);

ruta.delete("/:id_padron",  nacimientosControladores.eliminarNacimientos);

ruta.get("/:id_padron", nacimientosControladores.obtenerNacimiento );

/* ruta.get("/api/:id/:nombre", ); */

export default ruta;