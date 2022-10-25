import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginService} from'src/app/services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  urlBaseFront :string ="http://localhost:4200/";
  usuario: FormGroup;
  error: boolean = false;

  constructor(private httpclient: HttpClient ,private router: Router,public servicioLogin:LoginService) {
    this.usuario = new FormGroup({
      //pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?
      "nombreUser": new FormControl("", Validators.required),
      "contrasenia": new FormControl("", Validators.required)
    });
  }

  ngOnInit(): void {
  }

  async login() {
    if (this.usuario.valid == true) {
      this.servicioLogin.login(this.usuario.value).subscribe(res => {
        if (res.idUsuario == 0 || res.idUsuario == "") {
          this.error = true;
          this.router.navigate(["/login"]);
        }
        else {
          //Esta Ok
          this.error = false;
       window.location.href = this.urlBaseFront + "dashboard";
        }
        //console.log(res);

      });
    }
  }



}
