import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComprarService {
valorCrito: number=0;
  constructor() { }


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

private ComprarCripto(){}
}
