import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISubject } from 'src/app/shared/models/subject.interface';
import { SubjectService } from 'src/app/shared/services/subject.service';
import { API_PATH_PICTURES } from 'src/environments/environment';

@Component({
  selector: 'app-read-subject',
  templateUrl: './read-subject.component.html',
  styleUrls: ['./read-subject.component.css'],
})
export class ReadSubjectComponent implements OnInit {
  subjects: ISubject[];

  pictures = API_PATH_PICTURES;

  constructor(
    private readonly subjectService: SubjectService,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe((subjects) => {
      this.subjects = subjects;
    });
  }

  navigateToUpdate() {
    this.router.navigate(['/subject/update/:id']);
  }

  navigateToDelete() {
    this.router.navigate(['subject/delete/:id']);
  }

  navigateToCreate() {
    this.router.navigate(['subject/register']);
  }
}
