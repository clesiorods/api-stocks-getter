import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Price")

export class Price {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    open: boolean

    @Column()
    high: boolean

    @Column()
    low: boolean

    @Column()
    close: boolean

    @Column()
    volume: boolean

    @Column()
    created_at: Date

    @Column()
    updated_at: Date
    
}