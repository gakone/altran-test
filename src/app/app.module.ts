import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TemperatureComponentComponent } from './temperature-component/temperature-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
