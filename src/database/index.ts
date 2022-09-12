import { DataSource } from "typeorm";
import { DayPrice } from "../entities/DayPrice";
import { CreateDayPrices1662921974646 } from "./migrations/1662921974646-CreateDayPrices";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "analitic_db",
    // synchronize: true,
    // logging: true,
    entities: [DayPrice],
    // subscribers: [],
    migrations: [
        CreateDayPrices1662921974646
    ],
})

dataSource.initialize();

export default dataSource;