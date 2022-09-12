import { Double, Repository } from "typeorm";
import dataSource from "../../database";
import { DayPrice } from "../../entities/DayPrice";

interface IDayPrice {
    code: string,
    open: number,
    high: number,
    low: number,
    close: number,
    volume: number
}

class CreateDayPriceService {

    private dayPriceRepository: Repository<DayPrice>;

    constructor() {
        this.dayPriceRepository = dataSource.getRepository(DayPrice);
    }

    public async execute({ code, open, high, low, close, volume }: IDayPrice): Promise<DayPrice> {
        if (!code || !open || !high || !low || !close || !volume) {
            throw new Error("Dados incompletos");
        }
        // console.log(code, open, high, low, close, volume)
        const dayPrice = this.dayPriceRepository.create(
            {
                code,
                open,
                high,
                low,
                close,
                volume
            }
        );
            await this.dayPriceRepository.save(dayPrice);
        return dayPrice;
    }
}

export { CreateDayPriceService }