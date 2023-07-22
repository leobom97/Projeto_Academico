import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubject } from '../models/subject.interface';
import {
  API_PATH_SUBJECTS,
  API_PATH_SUBJECTS_CREATE,
} from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(
    private readonly httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {}

  showMessage(msg: string, isError: boolean = false) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  createSubject(subject: ISubject): Observable<ISubject> {
    return this.httpClient.post<ISubject>(
      `${API_PATH_SUBJECTS_CREATE}`,
      subject
    );
  }
  getSubjects(): Observable<ISubject[]> {
    return this.httpClient.get<ISubject[]>(`${API_PATH_SUBJECTS}`);
  }

  getSubject(id: number): Observable<ISubject> {
    const _url = `${API_PATH_SUBJECTS}/${id}`;
    return this.httpClient.get<ISubject>(_url);
  }

  updateSubject(subject: ISubject): Observable<ISubject> {
    const _url = `${API_PATH_SUBJECTS}/${subject.id}`;
    return this.httpClient.patch<ISubject>(_url, subject);
  }

  deleteSubject(id: number): Observable<ISubject> {
    const _url = `${API_PATH_SUBJECTS}/${id}`;
    return this.httpClient.delete<ISubject>(_url);
  }
}
