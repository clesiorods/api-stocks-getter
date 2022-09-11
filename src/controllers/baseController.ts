import { Request, Response } from "express";

export class BaseController {
    async hello(request: Request, response: Response): Promise<Response> {
        return response.status(200).json({available: true})
    }
}