import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
  } from 'typeorm';
  
  export enum VehicleType {
    SUV = 'SUV',
    SEDAN = 'SEDAN',
    TRUCK = 'TRUCK',
    SPORTS = 'SPORTS',
    LUXURY = 'LUXURY',
    ELECTRIC = 'ELECTRIC',
  }
  
  export enum FuelType {
    GASOLINE = 'GASOLINE',
    DIESEL = 'DIESEL',
    ELECTRIC = 'ELECTRIC',
    HYBRID = 'HYBRID',
    PLUGIN_HYBRID = 'PLUGIN_HYBRID',
  }
  
  @Entity()
  export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    manufacturer: string;
  
    @Column()
    model: string;
  
    @Column('int')
    year: number;
  
    @Column({
      type: 'enum',
      enum: VehicleType,
    })
    type: VehicleType;
  
    @Column('decimal', { precision: 10, scale: 2 })
    price: number;
  
    @Column({
      type: 'enum',
      enum: FuelType,
    })
    fuelType: FuelType;
  
    @Column()
    transmission: string;
  
    @Column({ type: 'int', nullable: true })
    mileage?: number;
  
    @Column('simple-array')
    features: string[];
  
    @Column('simple-array')
    images: string[];
  
    @Column('text')
    description: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }
  