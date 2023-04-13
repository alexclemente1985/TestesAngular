import { LoadPermissionsService } from './services/load-permissions/load-permissions.service';
import { Component, TemplateRef, Renderer2 } from '@angular/core';
import { NgxPermissionsConfigurationService, NgxPermissionsObject, NgxPermissionsService } from 'ngx-permissions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testePermissions';

  userPermissions$: Observable<NgxPermissionsObject>;

  constructor(
    private ngxPermissionsService: NgxPermissionsService,
    private loadPermissionsService: LoadPermissionsService,
    private ngxPermissionsConfigurationService: NgxPermissionsConfigurationService,
    private renderer2: Renderer2,
    private userPermissionsService: NgxPermissionsService
  ){
    this.userPermissions$ = this.ngxPermissionsService.permissions$
  }



 /*  constructor(
    private userPermissionsService: NgxPermissionsService
  ) {
    this.userPermissions$ = userPermissionsService.permissions$
   } */


  ngOnInit(){
    //this.ngxPermissionsService.loadPermissions(['DEVELOPER'])

    /**Pode ser substituído pelo uso do auth-guard na rota inicial*/
    /* this.loadPermissionsService.loadPermissions().then((data) => {
      this.ngxPermissionsService.loadPermissions(data);
    }) */
   // this.ngxPermissionsService.loadPermissions(['DEVELOPER','EDIT']);



   /* DISABLING ELEMENTS (Pode-se usar recurso de ng-template no lugar -> ver componente disable-tester)*/

    /* this.ngxPermissionsConfigurationService.addPermissionStrategy('disable', (templateRef?: TemplateRef<any>) => {
      setTimeout(() => {
        this.renderer2.setAttribute(templateRef?.elementRef.nativeElement.previousSibling,'disabled', 'true');
        this.renderer2.addClass(templateRef?.elementRef.nativeElement.previousSibling,'mat-button-disabled');
      })

    });

    this.ngxPermissionsConfigurationService.addPermissionStrategy('enable', (templateRef?: TemplateRef<any>) => {
      this.renderer2.removeAttribute(templateRef?.elementRef.nativeElement.previousSibling,'disabled');
    })

    this.ngxPermissionsConfigurationService.setDefaultOnAuthorizedStrategy('enable');
    this.ngxPermissionsConfigurationService.setDefaultOnUnauthorizedStrategy('disable'); */

    /* DISABLING ELEMENTS */
  }

  logout(){
    //this.ngxPermissionsService.flushPermissions();
    this.ngxPermissionsService.removePermission('ADMIN')
    localStorage.removeItem('permissions');
  }
}
