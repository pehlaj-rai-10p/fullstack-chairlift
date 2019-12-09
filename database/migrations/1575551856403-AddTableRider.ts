import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class AddTableRider1575551856403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(
            new Table({
                name: 'rider',
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
                        name: 'userName',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'passwordHash',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'firstName',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'lastName',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'mobileNumber',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'emailAddress',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'profilePicUrl',
                        type: 'character varying',
                        isNullable: true,
                    },
                    {
                        name: 'status',
                        type: 'character varying',
                        isNullable: false,
                        length: '100',
                    },
                    {
                        name: 'credits',
                        type: 'integer',
                        isNullable: false,
                        default: 0,
                    },
                    {
                        name: 'freeRides',
                        type: 'integer',
                        isNullable: false,
                        default: 5,
                    },
                    {
                        name: 'isActive',
                        type: 'boolean',
                        isNullable: false,
                        default: true,
                    },
                    {
                        name: 'isDeleted',
                        type: 'boolean',
                        isNullable: false,
                        default: false,
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('rider');
    }

}
