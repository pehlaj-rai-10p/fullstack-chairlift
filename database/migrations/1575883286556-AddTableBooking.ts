import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class AddTableBooking1575883286556 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
            new Table({
                name: 'booking',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        isNullable: false,
                        isGenerated: true,
                        generationStrategy: 'increment',
                    },
                    {
                        name: 'busId',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'riderId',
                        type: 'int',
                        isNullable: false,
                    },
                    {
                        name: 'trackingNumber',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'status',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                        default: 'idle'
                    },
                    {
                        name: 'pickupLocation',
                        type: 'json',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'dropOffLocation',
                        type: 'json',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'isDeleted',
                        type: 'boolean',
                        isNullable: true,
                        default: false,
                    },
                ],
            }),
        );

        await queryRunner.createForeignKey("bus", new TableForeignKey({
            columnNames: ["busId"],
            referencedColumnNames: ["id"],
            referencedTableName: "bus",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("rider", new TableForeignKey({
            columnNames: ["riderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "rider",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        const table = await queryRunner.getTable("booking");
        const fkBusId = table.foreignKeys.find(fk => fk.columnNames.indexOf("busId") !== -1);
        await queryRunner.dropForeignKey("bus", fkBusId);

        const fkRiderId = table.foreignKeys.find(fk => fk.columnNames.indexOf("riderId") !== -1);
        await queryRunner.dropForeignKey("rider", fkRiderId);

        await queryRunner.dropColumn("booking", "busId");
        await queryRunner.dropColumn("booking", "riderId");

        await queryRunner.dropTable("booking");


    }

}
