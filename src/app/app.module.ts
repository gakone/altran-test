import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TemperatureComponentModule } from './temperature-component/temperature-component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpModule,
    TemperatureComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
