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

  @Column("simple-json")
  public pickupLocation: { lat: number, lng: number };

  @Column("simple-json")
  public dropOffLocation: { lat: number, lng: number };

  @Column()
  public bookingTimeStamp: Date;

  @Column()
  public arrivalTimeStamp: Date;

  @Column()
  public pickupTimeStamp: Date;

  @Column()
  public dropOffTimeStamp: Date;

  @Column()
  public status: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  public isDeleted: boolean;
}
