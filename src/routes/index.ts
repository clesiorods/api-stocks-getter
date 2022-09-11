import { Router } from "express";
import baseRouter from "./baseRouter";

const routes = Router();

// routes.use('/', pricesRouter);
routes.use('/', baseRouter);

export default routes;