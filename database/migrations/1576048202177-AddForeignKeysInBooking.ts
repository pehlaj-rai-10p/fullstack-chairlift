import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AddForeignKeysInBooking1576048202177 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createForeignKey("booking", new TableForeignKey({
            columnNames: ["busId"],
            referencedColumnNames: ["id"],
            referencedTableName: "bus",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("booking", new TableForeignKey({
            columnNames: ["riderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "rider",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        const table = await queryRunner.getTable("booking");

        await queryRunner.dropForeignKey("booking", "busId");
        await queryRunner.dropForeignKey("booking", "riderId");

        await queryRunner.dropColumn("booking", "busId");
        await queryRunner.dropColumn("booking", "riderId");
    }

}
