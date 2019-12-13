import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeBusTableLocationColumn1576241224142 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        //await queryRunner.dropColumn('bus', 'location');
        await queryRunner.query('ALTER TABLE BUS ADD COLUMN location jsonb NOT NULL');
    }

    public async down(_queryRunner: QueryRunner): Promise<any> {
    }

}
