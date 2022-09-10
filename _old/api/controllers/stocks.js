const axios = require("axios");
const { Sequelize } = require('sequelize');
// const Produtos = require("../models/produtos");

module.exports = {
    async getStock(request, response) {
        let { code } = request.params;
        code = code.toUpperCase();
        console.log(code);
        try {
            const retorno = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}.SA&interval=5min&apikey=JPU4KXFBQN7XHC7I`);
            return response.status(200).json({dados: retorno.data })
        } catch (error) {
            return response.status(200).send({ dados: error })
        }
    },


    async getMyStocks(request, response) {
        const sequelize = new Sequelize('banco_teste', 'root', '', {
            host: 'localhost',
            dialect: 'mysql'
        });
        const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();
        response.status(200).send({ produtos: produtos })
    },

}