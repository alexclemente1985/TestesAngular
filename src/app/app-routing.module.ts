import { LoginLogoutComponent } from './components/login-logout/login-logout.component';
import { LoginComponent } from './components/login/login.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CodeIsolationComponent } from './components/code-isolation/code-isolation.component';
import { DisableTesterComponent } from './components/disable-tester/disable-tester.component';
import { FormComponent } from './components/form/form.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NgxPermissionsGuard } from "ngx-permissions";
import { AboutComponent } from "./components/about/about.component";
import { HomeComponent } from "./components/home/home.component";
import { AuthGuard } from "./guards/auth-guard/auth.guard";
import { CustomGuard } from './guards/custom/custom.guard';
import { CustomPermissionsComponent } from './components/custom-permissions/custom-permissions.component';

const routes: Routes = [
  {
    path: '',
    /**Pode ser substituído pela validação de permission no app.component */
    canActivate: [AuthGuard],
    children: [
      {
        path: 'about',
        component: AboutComponent,
        //canActivate: [NgxPermissionsGuard],
        canActivate: [CustomGuard],
        data: {
          permissions: {
            only: ['DEVELOPER'],
            notFound: ["NOT_FOUND_PERMISSION"],
            always: ["ALWAYS_PERMISSION"]
          },
        },
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'form',
        component: FormComponent,
        data: {
          permissions: {
            only: ['HAPPY'],
            redirectTo: '/denied'
          }
        },
        canActivate: [NgxPermissionsGuard]
      },
      {
        path: 'disable',
        component: DisableTesterComponent
      },
      {
        path: 'isolation',
        component: CodeIsolationComponent
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'denied',
        component: AccessDeniedComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'login-logout',
        component: LoginLogoutComponent
      },
      {
        path: 'custom-permission',
        component: CustomPermissionsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
