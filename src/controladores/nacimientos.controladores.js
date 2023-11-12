import pool from "../conexionDB.js"

/**
 * Devuelve todos los productos de la base de dato si existe
 * @param {Object} req de la consulta
 * @param {Object} res de la consulta
 */

async function obtenerNacimientos(req, res) {
    try {
        const [resultado] = await pool.query("SELECT * FROM nacimientos ");
        /*   console.log(info); */
        if (!resultado.length) {
            res.status(404).json(
                {
                    mensaje: "no se encontraron productos"
                }
            )
        } else {
            res.json(resultado)
        }
    } catch (error) {
        res.status(500).json(
            {
                informe: "Algo salio mal",
                error: error
            }
        )
    }
};

/* async function obtenerNacimiento(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta usada 1</h1>`)
} */

/**
 * Devuelve el nacimiento de la base de datos si existe
 * @param {*} req de la consulta
 * @param {*} res de la consulta
 */
async function obtenerNacimiento(req, res) {
    const ID = req.params.id_padron;

    try {
        const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", req.params.id_padron);
        /* res.send(`<h1>Ruta usada 2 | id: ${req.params.id}</h1>`) */
        if (!resultado.length) {
            res.status(404).json(
                {
                    info: "No se encontro el producto con id:" + ID
                }
            )
        } else {
            res.json(resultado)
        }
    } catch (error) {
        res.status(500).json(
            {
                informe: "Algo salio mal",
                error: error
            }
        )
    
    }


}

async function crearNacimientos(req, res) {
    /* console.log(req.query); */
    res.status(201).json(req.body);
};

async function actualizarNacimientos(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta para actualizar un elemento</h1>`)
}

async function eliminarNacimientos(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta para eliminar un elemento</h1>`)
}



/* async function obtenerNacimientos3(req, res) {
    res.send(`<h1>Ruta usada 3 | id: ${req.params.id} nombre: ${req.params.nombre}</h1>`)
} */

export default {
    obtenerNacimientos,
    obtenerNacimiento,
    crearNacimientos,
    actualizarNacimientos,
    eliminarNacimientos
}