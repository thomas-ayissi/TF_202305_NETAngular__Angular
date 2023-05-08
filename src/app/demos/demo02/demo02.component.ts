import { Component } from '@angular/core';

@Component({
  selector: 'app-demo02',
  templateUrl: './demo02.component.html',
  styleUrls: ['./demo02.component.scss']
})
export class Demo02Component {

  maVariable1: string = 'Hello';
  maVariable2: number = 0;
  maVariable3: boolean = false;

  changeValue (event: any): void {
      console.log(event.target.value);
      this.maVariable1 = event.target.value;
  }

}
