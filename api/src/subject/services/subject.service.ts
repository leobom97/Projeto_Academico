/* eslint-disable prettier/prettier */
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Subject } from 'src/entities/subject.entity';
import { Repository } from 'typeorm';
import { ISubject } from 'src/shared/interfaces/subject.interface';

@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async create(subject: ISubject, file: Express.Multer.File) {
    try {
      const newSubject = new Subject();
      newSubject.name = subject.name;
      newSubject.imageFile = file ? file.filename : '';
      await this.subjectRepository.save(newSubject);
      return { message: 'Subject succefully registered' };
    } catch (error) {
      console.log(error);
    }
  }

  async findAll() {
    try {
      const allSubjects = await this.subjectRepository.find();
      return allSubjects;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async findOne(id: number) {
    const subject = await this.subjectRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!subject) {
      throw new NotFoundException(
        `Subject with id ${id} was not found. Please enter a valid id`,
      );
    } else {
      return subject;
    }
  }

  async update(id: number, { name }: UpdateSubjectDto) {
    const findSubject = await this.subjectRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!findSubject) {
      throw new NotFoundException(
        `Subject with id ${id} was not found. Please enter a valid id`,
      );
    } else {
      return this.subjectRepository.update({ id: id }, { name: name });
    }
  }

  async remove(id: number) {
    const subject = await this.subjectRepository.delete(id);

    if (!subject) {
      throw new NotFoundException(
        `Subject with id ${id} was not found, please enter a valid id`,
      );
    }

    return {
      subject,
    };
  }
}
