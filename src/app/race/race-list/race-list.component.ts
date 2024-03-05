import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription, Observable } from 'rxjs';
import { first } from 'rxjs/operators';

import { RaceService } from '../services/race.service';
import { RaceModel } from '../models/race.model';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss'],
})
export class RaceListComponent implements OnInit, OnDestroy {
  dtOptions = {};
  isLoading$!: Observable<boolean>;
  listRace!: RaceModel[];
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/

  constructor(private raceService: RaceService) {}

  ngOnInit(): void {
    this.isLoading$ = this.raceService.isLoading$;

    this.dtOptions = {
      pagingType: 'full_numbers',
      paging: true,
    };
    this.raceService
      .getRaces()
      .pipe(first())
      .subscribe((list) => {
        this.listRace = list;
        console.log(this.listRace);
      });
  }
  ngOnDestroy(): void {}
}
