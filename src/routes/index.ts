import { Router } from "express";
import baseRouter from "./baseRouter";
import stocksRouter from "./stocksRouter";

const routes = Router();


routes.use('/stocks', stocksRouter);
routes.use('/', baseRouter);


export default routes;