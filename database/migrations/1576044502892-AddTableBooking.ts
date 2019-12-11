import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddTableBooking1576044502892 implements MigrationInterface {

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
                    },
                    {
                        name: 'bookingTime',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'estimatedDropOffTime',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'arrivalTime',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'pickupTime',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'dropOffTime',
                        type: 'timestamptz',
                        isNullable: false,
                    },
                    {
                        name: 'pickupLocation',
                        type: 'character varying',
                        isNullable: false,
                    },
                    {
                        name: 'dropOffLocation',
                        type: 'character varying',
                        isNullable: false,
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
    }

    public async down(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropTable("booking");
    }

}
