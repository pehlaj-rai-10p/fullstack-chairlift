import { MigrationInterface, QueryRunner } from "typeorm";

export class ChangeBookingTable1576230384304 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        //await queryRunner.dropColumn('booking', 'pickupLocation');
        //await queryRunner.dropColumn('booking', 'dropOffLocation');
        await queryRunner.query('ALTER TABLE booking ADD COLUMN pickupLocation jsonb NOT NULL');
        await queryRunner.query('ALTER TABLE booking ADD COLUMN dropOffLocation jsonb NOT NULL');
    }

    public async down(_queryRunner: QueryRunner): Promise<any> {
    }

}
