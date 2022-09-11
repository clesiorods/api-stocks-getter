import { Router } from "express";
import { BaseController } from "../controllers/baseController";

const pricesRouter = Router();

const baseController = new BaseController();

pricesRouter.use('/', baseController.hello);

export default pricesRouter;