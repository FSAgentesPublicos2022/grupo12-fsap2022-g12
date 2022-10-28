import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

export class Usuario
{
  nombreUser:string="";
  contrasenia:string="";
  mail:string="";
}

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  constructor(private http: HttpClient) { }
  urlBase :string ="https://localhost:44393/";

  public registroUsuario(usuario: any): Observable<any> {
    return  this.http.post( this.urlBase + "api/Usuarios/registro", usuario);
  }
}
