import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomComponent } from './rooms/create-room/create-room.component';
import { ReadRoomComponent } from './rooms/read-room/read-room.component';
import { UpdateRoomComponent } from './rooms/update-room/update-room.component';
import { DeleteRoomComponent } from './rooms/delete-room/delete-room.component';
import { CreateSubjectComponent } from './subjects/create-subject/create-subject.component';
import { ReadSubjectComponent } from './subjects/read-subject/read-subject.component';
import { UpdateSubjectComponent } from './subjects/update-subject/update-subject.component';
import { DeleteSubjectComponent } from './subjects/delete-subject/delete-subject.component';
import { CreateVideoComponent } from './videos/create-video/create-video.component';
import { ReadVideoComponent } from './videos/read-video/read-video.component';
import { UpdateVideoComponent } from './videos/update-video/update-video.component';
import { DeleteVideoComponent } from './videos/delete-video/delete-video.component';
import { MaterialModuleModule } from '../material-module/material-module.module';
import { ReadRoom2Component } from './rooms/read-room2/read-room2.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    CreateRoomComponent,
    ReadRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    CreateSubjectComponent,
    ReadSubjectComponent,
    UpdateSubjectComponent,
    DeleteSubjectComponent,
    CreateVideoComponent,
    ReadVideoComponent,
    UpdateVideoComponent,
    DeleteVideoComponent,
    ReadRoom2Component,
  ],
  imports: [
    CommonModule,
    MaterialModuleModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    RouterModule,
  ],
  exports: [
    CreateRoomComponent,
    ReadRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    CreateSubjectComponent,
    ReadSubjectComponent,
    UpdateSubjectComponent,
    DeleteSubjectComponent,
    CreateVideoComponent,
    ReadVideoComponent,
    UpdateVideoComponent,
    DeleteVideoComponent,
  ],
})
export class AcademicModule {}
