import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from 'typeorm';
import { Bus } from './bus';
import { Rider } from './rider';
import { Location } from '../entities/location';

export enum RideStatus {
  Idle = "Idle",
  InProgress = "InProgress",
  Complete = "Complete"
}

@Entity('booking')
export class Booking {
  @PrimaryGeneratedColumn()
  public id: number;

  @ManyToOne(_type => Bus, bus => bus.bookings)
  @JoinColumn({ name: 'busId', referencedColumnName: 'id' })
  public bus: Bus;

  @ManyToOne(_type => Rider, rider => rider.bookings)
  @JoinColumn({ name: 'riderId', referencedColumnName: 'id' })
  public rider: Rider;

  @Column()
  public busId: number;

  @Column()
  public riderId: number;

  @Column()
  public trackingNumber: string;

  @Column('jsonb')
  public pickupLocation: Location;

  @Column('jsonb')
  public dropOffLocation: Location;

  @Column('timestamptz')
  public bookingTime: Date;

  @Column('timestamptz')
  public estimatedDropOffTime: Date;

  @Column('timestamptz')
  public arrivalTime: Date;

  @Column('timestamptz')
  public pickupTime: Date;

  @Column('timestamptz')
  public dropOffTime: Date;

  @Column()
  public status: RideStatus;

  @Column({
    type: 'boolean',
    default: false,
  })
  public isDeleted: boolean;
}
