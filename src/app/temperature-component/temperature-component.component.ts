import { Component, OnInit, Input } from '@angular/core';
import { TemperatureService } from '../services/temperature-service.service';
import { IntervalObservable } from 'rxjs/observable/IntervalObservable';

@Component({
  selector: 'app-temperature-component',
  templateUrl: './temperature-component.component.html',
  styleUrls: ['./temperature-component.component.css'],
})
export class TemperatureComponentComponent implements OnInit {

  @Input('cityId') cityId: number;
  city: any = {};
  historyTemp: any = [];
  currentTemp: string;
  progressStatus: number;
  parsedTemp: number;

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    IntervalObservable.create(180000)
    .startWith(0)
    .subscribe(() => {
      this.temperatureService.getTemperatureByCity(this.cityId)
      .subscribe(
        (response: any) => {
          this.city = response;
          this.parsedTemp = Number(response.main.temp);
        }, (error: any) => {
          console.log('error', error.message);
        }, () => {
          this.currentTemp = this.city.main.temp;
          this.progressStatus = Number(this.currentTemp) * 100 / 40;
          this.saveHistory();
        }
      );
    });
  }

  saveHistory() {
    this.historyTemp = localStorage.getItem('historyTemp') !== null ? JSON.parse(localStorage.getItem('historyTemp')) : [];
    this.historyTemp.push({ city: this.city.name, temp: this.city.main.temp });
    localStorage.setItem('historyTemp', JSON.stringify(this.historyTemp));
  }

}
