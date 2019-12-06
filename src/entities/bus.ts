import { Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Column } from 'typeorm';

@Entity('bus')
export class Bus {
  @PrimaryGeneratedColumn()
  public id: number;

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

  @Column("simple-json")
  public route: { lat: number, lng: number };

  @Column({
    type: 'enum',
    enum: ["Idle", "Booking", "OnRoute"],
    default: "Idle"
  })
  public status: string;

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
