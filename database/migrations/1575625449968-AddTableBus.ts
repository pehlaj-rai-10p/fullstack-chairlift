import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class AddTableBus1575625449968 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
            new Table({
                name: 'bus',
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
                        name: 'registrationNumber',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'make',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'model',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'year',
                        type: 'integer',
                        isNullable: false,
                        default: 0,
                    },
                    {
                        name: 'chasisNumber',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'driverName',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'location',
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
                        name: 'route',
                        type: 'json',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'capacity',
                        type: 'integer',
                        isNullable: false,
                        default: 0,
                    },
                    {
                        name: 'availableSeats',
                        type: 'integer',
                        isNullable: true,
                        default: 0,
                    },
                    {
                        name: 'isActive',
                        type: 'boolean',
                        isNullable: true,
                        default: true,
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
        await queryRunner.dropTable('bus');
    }

}
