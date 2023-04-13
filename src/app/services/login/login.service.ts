import { LoadPermissionsService } from './../load-permissions/load-permissions.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private loadPermissionsService: LoadPermissionsService
  ) { }

  async loadPermissions(data: {name: string}){

    const permissions = await this.loadPermissionsService.loadPermissions();
    permissions.push('HAPPY');
    return Promise.resolve(permissions);
  }
}
