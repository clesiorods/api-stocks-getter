import { DataSource } from "typeorm";
import { Price } from "../entities/Price";
import { CreatePrices1662828608137 } from "./migrations/1662828608137-CreatePrices";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "analitic_db",
    // synchronize: true,
    // logging: true,
    entities: [Price],
    // subscribers: [],
    migrations: [
        CreatePrices1662828608137
    ],
})

dataSource.initialize();

export default dataSource;