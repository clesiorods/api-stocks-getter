const express = require("express");


const app = express();
const produtosRoutes = require('./api/routes/produtos');
const stocksRoutes = require('./api/routes/stocks');


app.use(express.json());
app.use('/produtos', produtosRoutes);
app.use('/stocks', stocksRoutes);


app.listen('4002', () => {
    console.log("Servidor rodando na porta 4002...");
})