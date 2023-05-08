import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrls: ['./demo04.component.scss']
})
export class Demo04Component {

  min: number = 0;
  max: number = 100;

  value: number = this.min;

  url: string = "https://www.google.com";

  bool: boolean = false;

}
