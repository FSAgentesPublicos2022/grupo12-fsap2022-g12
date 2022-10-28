import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 
import {compra} from '../modelos_Interfaces/compra';


@Injectable({
  providedIn: 'root'
})
export class ComprarService {
valorCrito: number=0;
urlBase :string ="https://localhost:44393/";

constructor(private http: HttpClient) {

 }


  public valorCripto(valor: number) {
    try {
      this.valorCrito=parseFloat(valor.toString());
    
     // console.log("Valor Cripto en el servicio:"+this.valorCrito);
    } 
    catch (e) {
      
    }    
  }

  public GetvalorCripto(): any {
    try {
      return this.valorCrito;
    
     // console.log("Valor Cripto en el servicio:"+this.valorCrito);
    } 
    catch (e) {
      console.error(e);
      return 0;
      
    }
  } //listo el get valor cripto

public ComprarCripto(compra:compra): Observable<any>{
  var url = this.urlBase + 'api/Operaciones/comprar';
    return this.http.post<compra>(url, compra).pipe(map(res => {

      // al lado del post iba.
}));
}

}  //fin servicio