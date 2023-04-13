import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private ngxPermissionsService: NgxPermissionsService,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  submitForm(){
    this.loginService
    .loadPermissions(this.form.value)
    .then((data)=>{

      console.log('eita chamando dr Hans Chucrute...', this.form.value)
      /* Usar o localStorage irá permitir que ao abrir outra aba, ainda seja possível acessar o dado guardado */
      /* localStorage.setItem('app.ngx-permissions', JSON.stringify(data)); */
      /* Uso de sessionStorage só permite acesso ao dado armazenado se continuar na mesma aba */
      sessionStorage.setItem('app.ngx-permissions', JSON.stringify(data));
      this.ngxPermissionsService.loadPermissions(data);
      this.router.navigate(['form']);
    })
  }

}
