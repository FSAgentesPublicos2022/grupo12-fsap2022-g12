import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { listacuentas } from '../modelos_interfaces/cuenta'
import { map } from 'rxjs/operators';
import { observable, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CuentaService {
  urlBase :string ="https://localhost:44393/";
  Var: string = JSON.parse(localStorage.getItem("idUsuario")!);
 

  constructor(private http: HttpClient) {
  
  }

getcuentas(): Observable<listacuentas[]>{
 // this.idus =localStorage.getItem("idUsuario")!;
  let direccion = this.urlBase + "api/CUENTAs/cuentasusuario/" + this.Var;
  console.log(this.Var)
  return this.http.get<listacuentas[]>(direccion);
}

}

