import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from 'src/app/services/login.service';
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
  constructor(private loginservice: LoginService,private router: Router) { }
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
        // Llamar a Listar Paginas....Todavia no implementado
        // this.usuarioService.listarPaginas().subscribe(dato => {
        //   this.menus = dato;
        // });
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


