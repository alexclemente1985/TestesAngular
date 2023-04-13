import { AppRoutingModule } from './app-routing.module';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPermissionsModule, NgxPermissionsService } from 'ngx-permissions';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoadPermissionsService } from './services/load-permissions/load-permissions.service';
import { FormComponent } from './components/form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DisableTesterComponent } from './components/disable-tester/disable-tester.component';
import { CodeIsolationComponent } from './components/code-isolation/code-isolation.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { LoginComponent } from './components/login/login.component';
import { LoginLogoutComponent } from './components/login-logout/login-logout.component';
import { CustomPermissionsComponent } from './components/custom-permissions/custom-permissions.component';

export function permissionsFactory(loadPermissionsService: LoadPermissionsService, ngxPermissionsService: NgxPermissionsService){
  return () => {
    return loadPermissionsService
    .loadPermissions()
    .then((data) => {
      ngxPermissionsService.loadPermissions(data);
      return true;
    })
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    FormComponent,
    DisableTesterComponent,
    CodeIsolationComponent,
    NotFoundComponent,
    AccessDeniedComponent,
    LoginComponent,
    LoginLogoutComponent,
    CustomPermissionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPermissionsModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: permissionsFactory,
    deps: [LoadPermissionsService, NgxPermissionsService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
