import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("day-prices")

export class DayPrice {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    code: string

    @Column()
    open: number

    @Column()
    high: number

    @Column()
    low: number

    @Column()
    close: number

    @Column()
    volume: number

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
    
}