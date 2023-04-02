import { Component, OnInit } from '@angular/core';
import { NgbAlertModule, NgbDatepickerModule, NgbDateStruct, NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-race-new',
  templateUrl: './race-new.component.html',
  styleUrls: ['./race-new.component.scss'],

})
export class RaceNewComponent implements OnInit {
  model: NgbDateStruct = { year: 2022, month: 6, day: 10 };
  // date = { year: number; month: number };
  time = { hour: 0, minute: 0 };
  constructor() { }

  ngOnInit(): void {
  }
  onDateSelect($event: any) {
    console.log($event);
    console.log(this.time);
  }

}
