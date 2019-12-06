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

  @Column({
    type: 'character varying',
    length: '100'
  })
  public route: string;

  @Column({
    type: 'character varying',
    length: '100',
    default: 'idle'
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
