import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription, race } from 'rxjs';
import { map, catchError, switchMap, finalize, tap } from 'rxjs/operators';

import { RaceModel } from '../models/race.model';
import { RaceHTTPService } from './race-http/race-http.service';

//export type RaceType = RaceModel | undefined;

@Injectable({
  providedIn: 'root',
})
export class RaceService {
  // private fields
  private unsubscribe: Subscription[] = []; // Read more: => https://brianflove.com/2016/12/11/anguar-2-unsubscribe-observables/
  //private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  isLoading$!: Observable<boolean>;
  _races!: BehaviorSubject<RaceModel[]>;
  _racesObs!: Observable<RaceModel[]>;
  isLoadingSubject!: BehaviorSubject<boolean>;

  constructor(private raceHttp: RaceHTTPService) {
    this._races = new BehaviorSubject<RaceModel[]>([]);
    this._racesObs = this._races.asObservable();
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  getRaces() {
    this.isLoadingSubject.next(true);
    return this.raceHttp.getRaces().pipe(
      map((raceList: any) => {
        const races: RaceModel[] = [];
        raceList.forEach((x: RaceModel) => {
          const obj = new RaceModel();
          obj.id = x.id;
          obj.nome = x.nome;
          obj.data = new Date(x.data);
          obj.durata = x.durata;
          obj.pista = x.pista;
          obj.data_inizio_effettiva = new Date(x.data_inizio_effettiva);
          races.push(obj);
        });
        return races;
      }),
      tap((races: any) => {
        this._races.next(races);
      }),
      finalize(() => this.isLoadingSubject.next(false))
    );
  }
  // getRaces(): {};
}
