import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TemperatureService {

  apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: Http) { }

  private getTemperatureByCity(city: string): Observable<City> {
    return this.http.get(`${this.apiUrl}/?q=${city}`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

}
