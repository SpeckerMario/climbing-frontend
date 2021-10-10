import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoonboardRoute } from '../common/moonboard-route';
import { map } from 'rxjs/operators';
import { MoonboardField } from '../common/moonboard-field';

@Injectable({
  providedIn: 'root'
})
export class MoonboardFieldService {

  private baseURL = 'http://localhost:8080/api/moonboard-routes';

 

  constructor(private httpClient: HttpClient) { }


  getMoonboardFieldList(theRouteId: number): Observable<MoonboardField[]> {

    const searchURL = `${this.baseURL}/search/findByRouteId?id=${theRouteId}`;

    return this.httpClient.get<GetResponseMoonboardField>(`${this.baseURL}`).pipe(
      map(response => response._embedded.moonboardFields)
    );
  }


  getMoonboardRouteList(): Observable < MoonboardRoute[] > {
    return this.httpClient.get<GetResponseMoonboardRoute>(`${this.baseURL}`).pipe(
      map(response => response._embedded.moonboardRoutes)
    );
  }

}




interface GetResponseMoonboardField {
  _embedded: {
    moonboardFields: MoonboardField[];

  }
}


interface GetResponseMoonboardRoute {
  _embedded: {
    moonboardRoutes: MoonboardRoute[];

  }
}
