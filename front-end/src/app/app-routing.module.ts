import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateRoomComponent } from './components/rooms/create-room/create-room.component';
import { ReadRoomComponent } from './components/rooms/read-room/read-room.component';
import { UpdateRoomComponent } from './components/rooms/update-room/update-room.component';
import { DeleteRoomComponent } from './components/rooms/delete-room/delete-room.component';
import { CreateVideoComponent } from './components/videos/create-video/create-video.component';
import { ReadVideoComponent } from './components/videos/read-video/read-video.component';
import { UpdateVideoComponent } from './components/videos/update-video/update-video.component';
import { DeleteVideoComponent } from './components/videos/delete-video/delete-video.component';
import { CreateSubjectComponent } from './components/subjects/create-subject/create-subject.component';
import { ReadSubjectComponent } from './components/subjects/read-subject/read-subject.component';
import { UpdateSubjectComponent } from './components/subjects/update-subject/update-subject.component';
import { DeleteSubjectComponent } from './components/subjects/delete-subject/delete-subject.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  //Salas

  { path: 'room/register', component: CreateRoomComponent },
  { path: 'rooms', component: ReadRoomComponent },
  { path: 'room/update/:id', component: UpdateRoomComponent },
  { path: 'room/delete/:id', component: DeleteRoomComponent },

  //Video Aulas

  { path: 'video/register', component: CreateVideoComponent },
  { path: 'videos', component: ReadVideoComponent },
  { path: 'video/update/:id', component: UpdateVideoComponent },
  { path: 'video/delete/:id', component: DeleteVideoComponent },

  //Disciplinas

  { path: 'subject/register', component: CreateSubjectComponent },
  { path: 'subjects', component: ReadSubjectComponent },
  { path: 'subject/update/:id', component: UpdateSubjectComponent },
  { path: 'subject/delete/:id', component: DeleteSubjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
