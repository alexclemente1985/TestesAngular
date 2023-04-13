import { TranslationsService } from './services/translations/translations.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { from, Observable } from 'rxjs';
import { pluck } from 'rxjs/operators'

import { AppComponent } from './app.component';

export class WebpackTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
      return from(import(`../assets/i18n/types/${lang}.ts`)).pipe(pluck('default'))
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: WebpackTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [TranslationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
