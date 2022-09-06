const express = require("express");
const axios = require("axios");


const app = express();
const produtosRoutes = require('./api/routes/produtos');


app.use(express.json());
app.use('/produtos', produtosRoutes);


app.listen('4002', () => {
    console.log("Servidor rodando na porta 4002...");
})





app.get('/acoes', async (request, response) => {

    const dados = await getUser();

    return response.json({
        message: "Deu certo",
        dados: dados
    })

});




async function getUser() {
    try {
        const response = await axios.get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MGLU3.SA&interval=5min&apikey=JPU4KXFBQN7XHC7I');
        // console.log(response.data);
        return (response.data);
    } catch (error) {
        // console.error(error);
        return error;
    }
}