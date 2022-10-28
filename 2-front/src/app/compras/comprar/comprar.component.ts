import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComprarService } from '../../services/comprar.service';
import {compra} from '../../modelos_Interfaces/compra';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  @Input() isMantenimiento = true; // ; A ESTO DEBO DARLE EVENTO DE CLICK PARA GESTION
  parametro: any;
  moneda:any;
  precioCriptoElegida: any;
  compraenDolares: any=0;
  unidadesCripto: any=0;
  public Compra: FormGroup;
  valor:any;
  instanciaCompra: compra;
  iduser:number=0;
  constructor( private formBuilder: FormBuilder,public comprarService: ComprarService, private router: Router, private activatedRoute: ActivatedRoute) 
  {
    this.instanciaCompra =
    {
      idUsuario: environment.idUsuario,
      precioCripto: environment.precioCripto,
       compraenDolar: environment.compraenDolar,
       nombreCripto:environment.nombreCripto
    }
    this.activatedRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];
      if (this.parametro) {
       // console.log("La Moneda elegida es: "+this.parametro);
      this.moneda=this.parametro;
      } else {
        console.log("No adopto el parametro");
      }
    });
   this.Compra = this.formBuilder.group(
    {
       "compraenDolares": new FormControl("", [Validators.required, Validators.maxLength(5),Validators.max(50000)]),
     //  "precioCriptoElegida": new FormControl("0")
      });
   } //fin constructor

  ngOnInit() {
    this.precioCriptoElegida= this.comprarService.GetvalorCripto();
    console.log("el valor de la cripto en compra es:" +this.precioCriptoElegida);
  }

  volver() {
    this.router.navigate(["/tabla-denuncia"]);
  }
  ComprarCripto() {
    if (this.Compra.valid == true) {
       var idUsuariotemp = JSON.parse(localStorage.getItem("idUsuario")||"0");
       this.iduser=Number('idUsuariotemp');
       console.log("Antes de pasar el usuario al back"+this.iduser+idUsuariotemp);
    
       this.instanciaCompra.idUsuario=idUsuariotemp;
      this.instanciaCompra.compraenDolar=this.compraenDolares;
      this.instanciaCompra.precioCripto=this.precioCriptoElegida;
      this.instanciaCompra.nombreCripto=this.moneda;
      this.comprarService.ComprarCripto(this.instanciaCompra).subscribe(data => {
      //   if (data) {
      //     console.log(data);
      //   }
      // });
     // this.modalService.open(this.myModalInfo);
     // this.router.navigate(["/"]);
    });
  }  //Guardar compra
  }


}
