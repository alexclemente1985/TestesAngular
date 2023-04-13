import { Injectable } from '@angular/core';
import { GenericClass, transformObjectToPath } from 'src/app/utils/json-to-types.utils';
import locale from '../../../assets/i18n/types/pt'

@Injectable({
  providedIn: 'root'
})
export class TranslationsService extends GenericClass<typeof locale>() {

  constructor() {
    super();
    Object.assign(this, transformObjectToPath('', locale));
   }
}
