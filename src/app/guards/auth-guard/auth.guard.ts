import { NgxPermissionsService } from 'ngx-permissions';
import { LoadPermissionsService } from '../../services/load-permissions/load-permissions.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loadPermissionsService: LoadPermissionsService,
    private ngxPermissionsService: NgxPermissionsService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  /* até aula 8 (create custom guard) */

  /* return this.loadPermissionsService
      .loadPermissions()
      .then(data => {
        this.ngxPermissionsService.loadPermissions(data);
        return true;
      }); */

  /* aula Preserve Permissions on page refresh (aula 7) */
  const permissions = localStorage.getItem('app.ngx-permissions');

  /* teste com sessionStorage (apenas aba original continua com acesso ao dado) */
  const permissionsSession = sessionStorage.getItem('app.ngx-permissions');

    if(permissions){
      this.ngxPermissionsService.loadPermissions(JSON.parse(permissionsSession));
    }
    return true;
  }

}
