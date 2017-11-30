import { Component, OnInit, Input } from '@angular/core';
import { TemperatureService } from '../services/temperature-service.service';

@Component({
  selector: 'app-temperature-component',
  templateUrl: './temperature-component.component.html',
  styleUrls: ['./temperature-component.component.css'],
})
export class TemperatureComponentComponent implements OnInit {

  @Input('cityId') cityId: number;
  city: any = {};

  constructor(private temperatureService: TemperatureService) { }

  ngOnInit() {
    this.temperatureService.getTemperatureByCity(this.cityId).subscribe(
      (response: any) => {
        this.city = response;
      }, (error: any) => {
        console.log('error', error.error.message);
      }, () => {
        console.log('complete');
      }
    );
  }

}
