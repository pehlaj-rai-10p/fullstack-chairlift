import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column, OneToOne } from 'typeorm';
import { Bus } from './bus';
import { Rider } from './rider';

@Entity('bus')
export class Booking {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public busId: number;

  @Column()
  public riderId: number;

  @OneToOne(_type => Bus)
  @JoinColumn({ name: 'busId', referencedColumnName: 'id' })
  public bus: Bus;

  @OneToOne(_type => Rider)
  @JoinColumn({ name: 'riderId', referencedColumnName: 'id' })
  public rider: Rider;

  @Column({
    type: 'character varying',
    length: '100'
  })
  public trackingNumber: string;

  @Column("jsonb")
  public pickupLocation: ILocation;

  @Column("jsonb")
  public dropOffLocation: ILocation;

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
  public status: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  public isDeleted: boolean;
}
