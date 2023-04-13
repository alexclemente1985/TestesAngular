import { NgxPermissionsService, NgxRolesService, NgxPermissionsObject } from 'ngx-permissions';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-permissions',
  templateUrl: './custom-permissions.component.html',
  styleUrls: ['./custom-permissions.component.scss']
})
export class CustomPermissionsComponent implements OnInit {

  userPermission$: Observable<NgxPermissionsObject>

  constructor(
    private ngxPermissionsService: NgxPermissionsService,
    private roleService: NgxRolesService
  ) {
    this.userPermission$ = this.ngxPermissionsService.permissions$;
  }

  ngOnInit(): void {
    this.ngxPermissionsService.loadPermissions(['PR_ADMIN','PR_USER', 'PR_SUPER_USER', 'DEVELOPER']);

    this.ngxPermissionsService.addPermission('MEGA_USER', (permissionName: string | undefined, permissionObject: any)=> {
      if(!permissionName){
        return false;
      }
      console.log(permissionObject)
      const keys = Object.keys(permissionObject);
      console.log(keys);
      return keys.some(key => {
        return key.includes('DEVELOPER')
      })
      //return !!(permissionObject['PR_ADMIN'] && permissionObject['PR_SUPER_USER']);
    })
  }

}
