import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoonboardRoute } from '../common/moonboard-route';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class MoonboardRouteService {

  private baseURL = 'http://localhost:8080/api/moonboard-route';

  constructor(private httpClient: HttpClient) { }

  getMoonboardRouteList(): Observable<MoonboardRoute[]> {
    return this.httpClient.get<GetResponse>(`${this.baseURL}`).pipe(
      map(response => response._embedded.moonboardRoutes)
    );
  }

}


interface GetResponse {
  _embedded: {
    moonboardRoutes: MoonboardRoute[];

  }
}