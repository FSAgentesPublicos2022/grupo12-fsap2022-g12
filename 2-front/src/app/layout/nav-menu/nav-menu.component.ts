import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
import {UsuarioService} from 'src/app/services/usuario.service';

import { Observable } from 'rxjs';

@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  login: boolean = false;//ojo con esta linea
  menus: any; //array de menus
  usuario: any;
  rol: any;
  idEmpleado:any;
  nombreEmpleado:any;
  constructor(private loginservice: LoginService,private usuarioservice: UsuarioService,private router: Router) { }
  isExpanded = false;
  collapse() {
    this.isExpanded = false;
  }
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
  
  ngOnInit() {
  
      if (localStorage.getItem("nombreUser")) {
        this.login = true;
        this.usuario=localStorage.getItem("nombreUser");
        this.rol=localStorage.getItem("rol");
        // Llamar a Listar Paginas....
        this.usuarioservice.listarPaginas().subscribe(dato => {
           this.menus = dato;
           console.log("muestra: "+this.menus[0].url+this.menus[0].Nombre);
         });
      }
      else {
        this.login = false;
        this.router.navigate(["/login"]);
      }
    
  }
   async cerrarSession() {
    this.loginservice.cerrarSession().subscribe((res: any) => {
      if (res == "ok") {
        this.login = false;
       // console.log("Cierra el usuario");
       this.router.navigate(["/"]);
      }
      else {
        this.login = true;
  
      }

  
    });
  }




} //final de la clase


