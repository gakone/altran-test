import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'app';
  citiesId: any = {
    saoPaulo: 3448439,
    santiago: 3983689,
    buenosAires: 6559994,
    lima: 3936456
  };
}
