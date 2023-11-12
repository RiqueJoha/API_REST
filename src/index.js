import configuracion from "./configuración.js";
import app from "./app.js";

app.listen(configuracion.PORT, () => {
    console.log("Servidor Iniciado en", configuracion.PORT);
});

