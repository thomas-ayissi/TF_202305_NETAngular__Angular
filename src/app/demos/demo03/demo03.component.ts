import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrls: ['./demo03.component.scss']
})
export class Demo03Component {

  nombre1: number = 0;

  increase1 (): void {
    this.nombre1++;
  }

  decrease1 (): void {
    this.nombre1--;
  }

  reset1 (): void {
    this.nombre1 = 0;
  }

}
