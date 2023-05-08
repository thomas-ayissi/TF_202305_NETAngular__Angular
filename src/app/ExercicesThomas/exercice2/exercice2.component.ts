import { Component } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.scss']
})
export class Exercice2Component {

/*<p>Créer une application qui coupe l'écran en deux.</p>
  <p>A gauche, un formulaire reprenant les informations de l'utilisateur.</p>
  <p>A droite, le profil de l'utilisateur qui se remplit en même temps que l'utilisateur entre les informations.</p>
  <p>La complétion du profil doit se faire en instantanné.</p>
  <p>Reprennez les différents champs de l'exercice 01 en y personnalisant certains.</p>
*/


  nom: string = 'Geerts';
  prenom: string = 'Quentin';
  email: string = 'quentin.geerts@bstorm.be';
  dateNaissance: Date = new Date(1996, 3, 3);
  genre: string = 'homme';
  langues: string[] = ['Français', 'Anglais'];
  image?: string = 'https://www.presse-citron.net/app/uploads/2022/12/voie-de-leau-avatar-2.jpg'


}
