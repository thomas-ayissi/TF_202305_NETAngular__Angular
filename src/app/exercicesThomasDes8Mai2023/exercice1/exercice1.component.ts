import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.scss']
})
export class Exercice1Component {

  nomComplet: string;
  adresseMail: string;
  declare dateDeNaissance: /*new Date;*/
  genre: string;
  languesParlees: string;
  photoDeProfil: object;


  maVariable1!: string; // definite assignment assertion
  maVariable2: boolean = false;
  declare maVariable3: number; // ambient declaration

  maVariable4: null = null;
  maVariable5: undefined = undefined;

  maVariable6: any[] = [
    'Chaine de caractères',
    12,
    false,
    () => { console.log("Hello"); },
    {}
  ];

  maVariable7: [string, number] = ['Il est bientôt 17h', 3]; // Tuple






}
