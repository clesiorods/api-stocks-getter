import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreatePrices1662828608137 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "prices",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: "open",
                        type: "float"
                    },
                    {
                        name: "high",
                        type: "float"
                    },
                    {
                        name: "low",
                        type: "float"
                    },
                    {
                        name: "close",
                        type: "float"
                    },
                    {
                        name: "volume",
                        type: "float"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }))
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("prices");
    }

}
