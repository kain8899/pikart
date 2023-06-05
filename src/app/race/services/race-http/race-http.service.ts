import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RaceModel } from '../../models/race.model';
const API_RACE_URL = `${environment.apiUrl}races`;

@Injectable({
  providedIn: 'root',
})
export class RaceHTTPService {
  constructor(private http: HttpClient) {}

  getRaces(): Observable<RaceModel> {
    return this.http.get<RaceModel>(API_RACE_URL);
  }
}
