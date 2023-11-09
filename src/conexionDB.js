import { createPool } from "mysql2/promise";
import configuracion from "./configuración.js"

const CREAR_TABLA = `
CREATE TABLE IF NOT EXISTS nacimientos(
    id_padron INT NOT NULL AUTO_INCREMENT,
    sexo VARCHAR(30) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    peso FLOAT,
    PRIMARY KEY (id_padron)
    )`;

console.log(configuracion.PORT)

const pool = createPool(
    {
        host: configuracion.HOST,
        port: configuracion.PORT,
        user: configuracion.USER,
        password: configuracion.PASSWORD,
        database: configuracion.NAME

    }
);
await pool.query(CREAR_TABLA);
console.log("CONEXION A BASE DE DATOS INICIADA")
export default pool;