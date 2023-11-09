async function obtenerNacimientos(req, res) {
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
};

async function obtenerNacimientos1(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta usada 1</h1>`)
}

async function crearNacimientos(req, res) {
    console.log(req.query);
    res.status(201).send(`<h1>Ruta para crear un elemento</h1>`)
}

async function actualizarNacimientos(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta para actualizar un elemento</h1>`)
}

async function eliminarNacimientos(req, res) {
    console.log(req.query);
    res.send(`<h1>Ruta para eliminar un elemento</h1>`)
}

async function obtenerNacimientos2(req, res) {
    const [resultado] = await pool.query("SELECT * FROM nacimientos WHERE id_padron= ? ", req.params.id_padron);
    /* res.send(`<h1>Ruta usada 2 | id: ${req.params.id}</h1>`) */
    res.json(resultado)
}

async function obtenerNacimientos3(req, res) {
    res.send(`<h1>Ruta usada 3 | id: ${req.params.id} nombre: ${req.params.nombre}</h1>`)
}

export default {
    obtenerNacimientos,
    obtenerNacimientos1,
    crearNacimientos,
    actualizarNacimientos,
    obtenerNacimientos2,
    obtenerNacimientos3,
    eliminarNacimientos
}