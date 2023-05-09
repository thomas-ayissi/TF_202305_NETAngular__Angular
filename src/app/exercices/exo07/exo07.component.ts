import { Component } from '@angular/core';

@Component({
  selector: 'app-exo07',
  templateUrl: './exo07.component.html',
  styleUrls: ['./exo07.component.scss']
})

export class Exo07Component {

  temperature1: number = 10;
  temperature2: number = 10;

  fahrenheit: number = (celsius * (9/5)) + 32

  celsius: number = (33,8*fahrenheit -32) * (9/5)
}
