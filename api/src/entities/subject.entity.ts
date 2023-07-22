/* eslint-disable prettier/prettier */
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Room } from './room.entity';

@Entity('subjects')
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'varchar', length: 300, nullable: true })
  imageFile: string;

  @ManyToMany(() => Room, (room) => room.subjects)
  @JoinTable({
    name: 'room_subject',
    joinColumn: {
      name: 'room_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'subject_id',
      referencedColumnName: 'id',
    },
  })
  room: Room[];
}
