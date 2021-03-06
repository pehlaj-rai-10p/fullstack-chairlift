import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Booking } from './booking';
import { Location } from './location';

export enum BusStatus {
  Idle = 'Idle',
  Booking = 'Booking',
  OnRoute = 'OnRoute'
}

@Entity('bus')
export class Bus {
  @PrimaryGeneratedColumn()
  public id: number;

  //@OneToMany(_type => Booking, booking => booking.bus)
  public bookings: Booking[];

  @Column({
    type: 'character varying',
    length: '100'
  })
  public registrationNumber: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public make: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public model: string;

  @Column({
    type: 'integer',
    default: 0
  })
  public year: number;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public chasisNumber: string;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public driverName: string;

  @Column({
    name: 'location',
    type: 'character varying',
    length: '100'
  })
  public currentLocation: string;

  @Column("jsonb")
  public route: Location[];

  @Column('text')
  public status: BusStatus;

  @Column({
    type: 'integer',
    default: 0
  })
  public capacity: number;

  @Column({
    type: 'integer',
    default: 0
  })
  public availableSeats: number;

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
