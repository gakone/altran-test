import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TemperatureService } from '../services/temperature-service.service';
import { TemperatureComponentComponent } from './temperature-component.component';

@NgModule({
  declarations: [
    TemperatureComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TemperatureService],
  exports: [TemperatureComponentComponent]
})
export class TemperatureComponentModule { }
