import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getValue'
})
export class GetValuePipe implements PipeTransform {

  transform (formateurs: any[], id: string, prop: string): any {
    let formateur = formateurs.find(formateur => formateur.id === id);
    // return formateur ? formateur[prop] : '';

    if (formateur && formateur[prop]) {
      return formateur[prop];
    }
    else {
      if (!formateur) return 'Id non trouvé';
      return 'Propriété non trouvée';
    }

    // return formateur && formateur[prop] ? formateur[prop] : '';
  }

}
