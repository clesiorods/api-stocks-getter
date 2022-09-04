const express = require("express");

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log("Servidor rodando na porta "+PORT);
});

app.get('/', (req, res) => {
    return res.json({
        message: "Deu certo"
    })
})