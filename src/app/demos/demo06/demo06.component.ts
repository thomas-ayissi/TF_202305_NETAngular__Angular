import { Component } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrls: ['./demo06.component.scss']
})
export class Demo06Component {

  maVariable1: string = "helLo woRLd !";
  maVariable2: number = 150.369858147;
  maVariable3: Date = new Date();
  maVariable4: {} = { nom: 'Geerts', prenom: 'Quentin', genre: 'H' };

}
