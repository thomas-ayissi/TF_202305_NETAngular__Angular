import { Component } from '@angular/core';

@Component({
  selector: 'app-demo07',
  templateUrl: './demo07.component.html',
  styleUrls: ['./demo07.component.scss']
})
export class Demo07Component {

  nbSecondes: number = 89999;
  formateurs: any[] = [
    { id: '001', nom: 'Geerts', prenom: 'Quentin', age: 27 },
    { id: '002', nom: 'Person', prenom: 'Michael', age: 39 },
    { id: '003', nom: 'Geerts', prenom: 'Mélanie', age: 35 },
    { id: '004', nom: 'Legrain', prenom: 'Samuel', age: 30 },
    { id: '005', nom: 'Ly', prenom: 'Khun', age: 40 },
  ];

}
