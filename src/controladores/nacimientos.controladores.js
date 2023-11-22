import pool from "../conexionDB.js"

/**
 * Devuelve todos los productos de la base de dato si existe
 * @param {Object} req de la consulta
 * @param {Object} res de la consulta
 */

async function obtenerNacimientos(req, res) {
    const ID = req.params.id_padron;
    try {
        const [resultado] = await pool.query("SELECT * FROM nacimientos ", ID);
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
        const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", ID);
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
    const { sexo, nombre, apellido, peso } = req.body;
    try {

        const [info] = await pool.query(`INSERT INTO nacimientos (sexo, nombre,apellido, peso)VALUE(?,?,?, ?);`, [sexo, nombre, apellido, peso]);
        const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", [info.insertId]);
        /* res.status(201).json(req.body);
        console.log(info) */
        console.log(info.affectedRows);
        if (info.affectedRows != 1 || !resultado.length) {
            res.status(404).json({
                mensaje: "Error al agregar nacimiento"
            })
        } else {
            res.status(201).json(req.body);
            idNuevo: info.insertId;
            nacimiento: resultado;
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

async function actualizarNacimientos(req, res) {
    console.log(req.query);
    const ID = req.params.id_padron;
    console.log(ID);
    try {
        const { sexo, nombre, apellido, peso } = req.body;
        const [info] = await pool.query(`UPDATE nacimientos SET sexo=?, nombre=?,apellido=?, peso=?  WHERE id_padron=?;`, [sexo, nombre, apellido, peso, ID]);
        console.log(info)
        /*  res.send(`<h1>Ruta para actualizar un elemento</h1>`) */
        if (info.affectedRows !== 1 || info.warningStatus !== 0) {
            res.status(404).json({
                info: "Error al actualizar el dato con id:" + ID
            })
        } else {
            res.json({
                info: "Producto actualizado"
            });
        }
    } catch (error) {
        res.status(500).json(
            {
                informe: "Algo salio mal al actualizar",
                error: error
            }
        )
    }

}

async function eliminarNacimientos(req, res) {
    /*     console.log(req.query);
        res.send(`<h1>Ruta para eliminar un elemento</h1>`) */
    const ID = req.params.id_padron;
    try {
        const [resultado] = await pool.query("DELETE FROM nacimientos where id_padron= ?;", [ID]);
        /*   console.log(info); */
        console.log(resultado);
        if (resultado.affectedRows !== 1) {
            res.status(404).json(
                {
                    mensaje: "No se encontraron id " + ID
                }
            )
        } else {
            res.json(
                { info: "Nacimiento con id: " + ID + " eliminado" }
            )
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