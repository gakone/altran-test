import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureComponentComponent } from './temperature-component/temperature-component.component';
import { TemperatureService } from './services/temperature-service.service';
import { HttpModule } from '@angular/http';
import { TemperatureComponentModule } from './temperature-component/temperature-component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    TemperatureComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
