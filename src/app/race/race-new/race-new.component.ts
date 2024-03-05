import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  FormsModule,
  Validator,
  Validators,
} from '@angular/forms';
import { JsonPipe } from '@angular/common';

declare global {
  interface JQuery {
    select2(): void;
  }
}
@Component({
  selector: 'app-race-new',
  templateUrl: './race-new.component.html',
  styleUrls: ['./race-new.component.scss'],
})
export class RaceNewComponent implements OnInit {
  // date = { year: number; month: number };
  time = { hour: 0, minute: 0 };
  raceForm!: FormGroup;
  hasError: boolean = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    $('#select_test').select2();
    this.raceForm = this.fb.group({
      nome: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(320),
        ]),
      ],
      pista: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(320),
        ]),
      ],
      durata: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(4),
        ]),
      ],
      data_inizio: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(320),
        ]),
      ],
    });
  }

  get f() {
    return this.raceForm.controls;
  }
  onDateSelect($event: any) {
    console.log($event);
    console.log(this.f['durata'].value);
  }
  submit() {
    this.hasError = false;
  }
}
