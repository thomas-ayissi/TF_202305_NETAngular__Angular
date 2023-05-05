import { Component } from '@angular/core';

@Component({
  selector: 'app-demo01',
  templateUrl: './demo01.component.html',
  styleUrls: ['./demo01.component.scss']
})
export class Demo01Component {

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

  ngOnInit (): void {
    console.log("Création du composant");
    this.maVariable1 = "Hello World !";
    this.maVariable3 = 42;
  }

}
