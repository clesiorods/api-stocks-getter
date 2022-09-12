import { Request, Response } from "express";
import { CreateDayPriceService } from "../services/create/dayPriceService";
const axios = require("axios");


export class SupplyController {


    async getOne(request: Request, response: Response): Promise<Response> {
        let { code } = request.params;
        code = code.toUpperCase();
        // console.log(code);
        try {
            const retorno = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}.SA&interval=5min&apikey=JPU4KXFBQN7XHC7I`);
            return response.status(200).json({ dados: retorno.data })
        } catch (error) {
            return response.status(200).send({ dados: error })
        }
    }


    async insertDayPrice(request: Request, response: Response): Promise<Response> {

        const { open, high, low, close, volume } = request.body;

        let { code } = request.params;
        code = code.toUpperCase();


        try {
            const retorno = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${code}.SA&interval=5min&apikey=JPU4KXFBQN7XHC7I`);

            const dados = retorno['data']['Time Series (Daily)'];
            Object.keys(dados).forEach((dayPrice) => {
                console.log(dados[dayPrice])
            });

            return response.status(200).json({ dados: retorno.data })
        } catch (error) {
            return response.status(200).send({ dados: error })
        }


        try {
            const createDayPriceService = new CreateDayPriceService();
            const dayPrice = await createDayPriceService.execute(
                {
                    code: code,
                    open,
                    high,
                    low,
                    close,
                    volume
                }
            )
            return response.status(201).json({ success: true, message: "Cotação cadastrada com sucesso", object: dayPrice });
        } catch (error) {
            return response.status(400).json({ message: error.message });
        }
    }

}