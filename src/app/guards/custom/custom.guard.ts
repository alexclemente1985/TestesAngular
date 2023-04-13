import { NgxPermissionsGuard } from 'ngx-permissions';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomGuard implements CanActivate {

  constructor(
    private ngxPermissionsGuard: NgxPermissionsGuard,
    private router: Router
  ){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const alwaysData = route.data['permissions'].always;
    const notFoundData = route.data['permissions'].notFound;

    const alwaysRequestData: any = {
      ...route,
      data: {
        permissions: {
          only: alwaysData
        }
      }
    }

    const notFoundRequestData: any = {
      ...route,
      data: {
        permissions: {
          only: notFoundData
        }
      }
    }

    const alwaysGuard = this.ngxPermissionsGuard.canActivate(alwaysRequestData, state) as Promise<boolean>;
    const notFoundGuard = this.ngxPermissionsGuard.canActivate(notFoundRequestData, state) as Promise<boolean>;

    return alwaysGuard.then((data)=> {
      if(!data){
        this.router.navigate(['denied']);
        return Promise.reject();
      }
      return notFoundGuard;
    }).then((data)=> {
      if(!data){
        this.router.navigate(['not-found'])
      }
      return data;
    });
  }

}
