import { Observable } from 'rxjs';
import { NgxPermissionsObject, NgxPermissionsService } from 'ngx-permissions';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-logout',
  templateUrl: './login-logout.component.html',
  styleUrls: ['./login-logout.component.scss']
})
export class LoginLogoutComponent implements OnInit {
  userPermissions$: Observable<NgxPermissionsObject>;

  userPermission;

  constructor(
    private userPermissionsService: NgxPermissionsService
  ) {
    this.userPermissions$ = userPermissionsService.permissions$
   }

  ngOnInit(): void {
    if(localStorage.getItem('permissions')){
      this.userPermissionsService.loadPermissions(JSON.parse(localStorage.getItem('permissions')))
    }

    this.userPermissions$
    .subscribe(
      v => {
        console.log('eita preula: ', v.ADMIN)
        this.userPermission = JSON.stringify(v.ADMIN)}
    )
  }

  login(){
    this.userPermissionsService.addPermission('ADMIN');
    localStorage.setItem('permissions', JSON.stringify(['ADMIN']));
  }

  logout(){

  }

}
