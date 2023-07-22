import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css'],
})
export class CreateSubjectComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  cancelarRegistro() {
    this.router.navigate(['/subjects']);
  }
}
