import { Router } from "express";
import { SupplyController } from "../controllers/supplyController";


const supplyRouter = Router();
const supplyController = new SupplyController();


supplyRouter.get('/supply/:code', supplyController.getOne);
supplyRouter.post('/supply/:code', supplyController.insertDayPrice);


export default supplyRouter;