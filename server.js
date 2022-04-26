const express = require('express')

const { Contenedor } = require('./main');

const producto = new Contenedor('./productos.txt');

const PORT = 8080

const app = express()

const server = app.listen(PORT,()=>{
    console.log('Servidor HTTP  escuchando en el puerto ' + PORT)
})

app.get('/productos', async (req,res)=>{
   res.send(await producto.getAll())
})

app.get('/productoRandom',async (req,res)=>{
    res.send(await producto.getRandom())
})