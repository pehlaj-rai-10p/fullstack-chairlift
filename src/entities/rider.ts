import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Booking } from './booking';

export enum RiderStatus {
  Idle = 'Idle',
  RideBooked = 'RideBooked',
  InRide = 'InRide'
}

@Entity('rider')
export class Rider {
  @PrimaryGeneratedColumn()
  public id: number;

  @OneToMany(_type => Booking, booking => booking.rider)
  public bookings: Booking[];

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
    type: 'character varying',
    length: '255'
  })
  public profilePicUrl: string;

  // @Column({
  //   type: 'character varying',
  //   length: '100'
  // })
  // public status: string;

  @Column('text')
  public status: RiderStatus;

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
