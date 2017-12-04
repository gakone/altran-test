import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class TemperatureService {

  apiUrl: string = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(private http: Http) { }

  getTemperatureByCity(cityId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/?id=${cityId}&APPID=${'03941c15f75ac8d7b785244e4119cb08'}&units=metric`)
    .map((res: Response) => res.json())
    .catch((error: any) => Observable.throw(error.json().error || Observable.throw(error.json()) || 'Server error'));
  }

}
