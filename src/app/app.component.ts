import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Altran temperature test';
  cities: any = [
    {name: 'saoPaulo', id: 3448439},
    {name: 'santiago', id: 3983689},
    {name: 'buenosAires', id: 6559994},
    {name: 'lima', id: 3936456}
  ];
}
