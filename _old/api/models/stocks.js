"use strict"
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    class Stocks extends Model { }

    Prices.init(
        {
            id: DataTypes.INT,
            open: DataTypes.FLOAT,
            high: DataTypes.FLOAT,
            low: DataTypes.FLOAT,
            close: DataTypes.FLOAT,
            volume: DataTypes.FLOAT,
            create_at: DataTypes.DATE,
            updated_at: DataTypes.DATE
        },
        {
            sequelize,
            modelName: "prices",
        });
    return Prices;
}