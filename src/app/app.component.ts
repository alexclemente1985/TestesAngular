import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationsService } from './services/translations/translations.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testeTranslate';
  param = {value: 'Angular + @ngx-translate + Typings'};

  constructor(
    private translateService: TranslateService,
    public translations: TranslationsService
  ){
    this.translateService.setDefaultLang('pt')
  }

  changeLanguage(locale: string){
    this.translateService.use(locale);
  }
}
