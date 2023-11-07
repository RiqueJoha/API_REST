import express from "express";

const app=express();

app.get("",(req,res)=>{
    res.send("<h1>Ruta vacia 0</h1>")
})

app.get("/api",(req,res)=>{
    console.log(req.query);
    res.send(`<h1>Ruta usada 1</h1>`)
})

app.get("/api/:id",(req,res)=>{
    res.send(`<h1>Ruta usada 2 | id: ${req.params.id}</h1>`)
})

app.get("/api/:id/:nombre",(req,res)=>{
    res.send(`<h1>Ruta usada 3 | id: ${req.params.id} nombre: ${req.params.nombre}</h1>`)
})

app.listen(3000,()=>{
    console.log("Servidor Iniciado")
});

app.use((req,res)=>{
res.send("<h1>Error</h1>")
})