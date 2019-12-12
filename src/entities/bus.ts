import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ILocation } from '../interfaces/location';
import { Booking } from './booking';
import booking from '../routes/booking';

enum BusStatus {
  Idle = 'Idle',
  Booking = 'Booking',
  OnRoute = 'OnRoute'
}

@Entity('bus')
export class Bus {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(_type => Booking, booking => booking.bus)
  @JoinColumn({ name: 'busId', referencedColumnName: 'id' })
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
  public route: ILocation[];

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
