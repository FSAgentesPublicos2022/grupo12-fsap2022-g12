import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import {usuario} from '../modelos_interfaces/usuario';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  rol:any;
  urlBase :string ="https://localhost:44393/";
  constructor(private http: HttpClient, private router: Router) {
    this.rol=localStorage.getItem("rol");  
  }

    public listarPaginas(): Observable<any> {
      return this.http.get(this.urlBase + 'api/Usuarios/listarpaginas/'+"Admin")  // this.rol
        .pipe(map(res => res)) ;
       
    }
  }
    


