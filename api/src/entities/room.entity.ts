import { Video } from 'src/entities/video.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToMany,
} from 'typeorm';
import { Subject } from './subject.entity';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @OneToMany(() => Video, (video) => video.room)
  videos: Video[];

  @ManyToMany(() => Subject, (subject) => subject.room)
  subjects: Subject[];
}
