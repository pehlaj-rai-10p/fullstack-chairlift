import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Chairlift1576493331854 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await this.createTableRider(queryRunner);

        await this.createTableBus(queryRunner);

        await this.createTableBooking(queryRunner);

        await this.createBusForeignKeyInBooking(queryRunner);

        await this.createRiderForeignKeyInBooking(queryRunner);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable('bus');
        await queryRunner.dropTable('rider');

        await queryRunner.dropForeignKey("booking", "busId");
        await queryRunner.dropForeignKey("booking", "riderId");

        await queryRunner.dropColumn("booking", "busId");
        await queryRunner.dropColumn("booking", "riderId");

        await queryRunner.dropTable('booking');
    }

    private createBusForeignKeyInBooking(queryRunner: QueryRunner) {

        queryRunner.createForeignKey("booking", new TableForeignKey({
            columnNames: ["busId"],
            referencedColumnNames: ["id"],
            referencedTableName: "bus",
            onDelete: "CASCADE"
        }));
    }

    private createRiderForeignKeyInBooking(queryRunner: QueryRunner) {

        queryRunner.createForeignKey("booking", new TableForeignKey({
            columnNames: ["riderId"],
            referencedColumnNames: ["id"],
            referencedTableName: "rider",
            onDelete: "CASCADE"
        }));
    }

    /**
     * createTableRider
     */
    private createTableBus(queryRunner: QueryRunner) {

        queryRunner.createTable(
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
                        length: '20',
                    },
                    {
                        name: 'make',
                        type: 'character varying',
                        isNullable: false,
                        length: '50',
                    },
                    {
                        name: 'model',
                        type: 'character varying',
                        isNullable: false,
                        length: '50',
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
                        type: 'json',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'enum',
                        enum: ['Idle', 'Booking', 'OnRoute'],
                        isNullable: false,
                    },
                    {
                        name: 'route',
                        type: 'json',
                        isNullable: false,
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
                        isNullable: false,
                        default: 0,
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
                        isNullable: true,
                        default: false,
                    },
                ],
            }),
        );
    }

    /**
     * createTableRider
     */
    private createTableRider(queryRunner: QueryRunner) {

        queryRunner.createTable(
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
                        length: '50',
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
                        length: '50',
                    },
                    {
                        name: 'lastName',
                        type: 'character varying',
                        isNullable: false,
                        length: '50',
                    },
                    {
                        name: 'mobileNumber',
                        type: 'character varying',
                        isNullable: false,
                        length: '20',
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
                        type: 'enum',
                        enum: ['Idle', 'RideBooked', 'InRide'],
                        isNullable: false,
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

    private createTableBooking(queryRunner: QueryRunner) {

        queryRunner.createTable(
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
                        length: '30',
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
                        type: 'json',
                        isNullable: false,
                    },
                    {
                        name: 'dropOffLocation',
                        type: 'json',
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
}
