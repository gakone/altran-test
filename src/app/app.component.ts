import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Altran temperature test';
  subtitle: string = 'Temperatures are updated every three minutes and stored in localStorage.';
  info: string = 'The maximum temperature shown in the graphs is 40 degrees.';
  cities: any = [
    {name: 'saoPaulo', id: 3448439},
    {name: 'santiago', id: 3983689},
    {name: 'buenosAires', id: 6559994},
    {name: 'lima', id: 3936456}
  ];
}
