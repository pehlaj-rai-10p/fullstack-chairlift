import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeBusTableRouteColumn1576231011384 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.dropColumn('bus', 'route');
        await queryRunner.query('ALTER TABLE BUS ADD COLUMN route jsonb');
    }

    public async down(_queryRunner: QueryRunner): Promise<any> {
    }

}
