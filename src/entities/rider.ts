import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from 'typeorm';

@Entity('rider')
export class Rider {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public userName: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public passwordHash: string;
  
  @Column({
    type: 'character varying',
    length: '100'
  })
  public firstName: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public lastName: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public mobileNumber: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public emailAddress: string;

  @Column({
    type: 'enum',
    enum: ["Idle", "RideBooked", "InRide"],
    default: "Idle"
  })
  public status: string;

  @Column({
    type: 'integer',
    default: 0
  })
  public credits: number;

  @Column({
    name: 'freeRides',
    type: 'integer',
    default: 5
  })
  public numFreeRides: number;

  @Column({
    type: 'boolean',
    default: true,
  })
  public isActive: boolean;

  @Column({
    type: 'boolean',
    default: false,
  })
  public isDeleted: boolean;
}
