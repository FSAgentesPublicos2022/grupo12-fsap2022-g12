import { Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ComprarService } from '../../services/comprar.service';

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
  constructor( private formBuilder: FormBuilder,public comprarService: ComprarService, private router: Router, private activatedRoute: ActivatedRoute) 
  {

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
       "compraenDolares": new FormControl("", [Validators.required, Validators.maxLength(5)]),
       "precioCriptoElegida": new FormControl("0")
      });
   }

  ngOnInit() {
    this.precioCriptoElegida= this.comprarService.GetvalorCripto();
    console.log("el valor de la cripto en compra es:" +this.precioCriptoElegida);
  }

  volver() {
    this.router.navigate(["/tabla-denuncia"]);
  }
  ComprarCripto() {
    if (this.Compra.valid == true) {
      //this.comprarService.ComprarCripto(this.Compra.value).subscribe(data => {
      //   if (data) {
      //     console.log(data);
         
      //   }
      // });
     // this.modalService.open(this.myModalInfo);
     // this.router.navigate(["/"]);
    }
  }  //Guardar compra
  


}
