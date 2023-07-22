import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseInterceptors,
  ParseIntPipe,
  UploadedFile,
  BadRequestException,
} from '@nestjs/common';
import { SubjectService } from '../services/subject.service';
import { CreateSubjectDto } from '../dto/create-subject.dto';
import { UpdateSubjectDto } from '../dto/update-subject.dto';
import { Response, response } from 'express';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Helper } from 'src/helpers/helper';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  //Criar Disciplina e Upload de Imagem

  @Post('register')
  @UseInterceptors(
    FileInterceptor('imageFile', {
      storage: diskStorage({
        destination: './uploads',
        filename: Helper.customFileName,
      }),
    }),
  )
  createSubject(
    @Body() createSubjectDTO: CreateSubjectDto,
    @UploadedFile() file: Express.Multer.File,
    @Res() res: Response,
  ) {
    return (
      this.subjectService.create(createSubjectDTO, file),
      res.json({ message: 'Subject succefully created!!!' })
    );
  }

  @Get()
  findAll() {
    return this.subjectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.subjectService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSubjectDTO: UpdateSubjectDto) {
    return this.subjectService.update(+id, updateSubjectDTO);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    return (
      this.subjectService.remove(+id),
      res.json({ message: 'Subject succefully deleted' })
    );
  }

  @Get('pictures/:filename')
  async getPicture(@Param('filename') filename, @Res() res: Response) {
    res.sendFile(filename, { root: './uploads' });
  }
}
