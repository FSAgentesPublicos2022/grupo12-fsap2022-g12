import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ComprarService } from '../../services/comprar.service';

@Component({
  selector: 'comprar',
  templateUrl: './comprar.component.html',
  styleUrls: ['./comprar.component.css']
})
export class ComprarComponent implements OnInit {
  @Input() isMantenimiento = true; //A ESTO DEBO DARLE EVENTO DE CLICK PARA GESTION
  parametro: any;
  moneda:any;
  trabajos: any;
  //comprar cantidad equivalente en pesos
  cantidadPesos: any=0;
  //comprar cantidad equivalente en criptos.
  unidadesCripto: any=0;
  cabeceras: string[] = ["Fecha", "Numero de Trabajo", "Descripcion", "Leg. Empleado"];
  
  constructor(private comprarService: ComprarService, private router: Router, private activatedRoute: ActivatedRoute) 
  {
    this.activatedRoute.params.subscribe(parametro => {
      this.parametro = parametro["id"];
      if (this.parametro) {
        console.log("La Moneda elegida es: "+this.parametro);
      this.moneda=this.parametro;
      } else {
        console.log("No adopto el parametro");
      }
    });
   }

  ngOnInit() {
    if (this.parametro >= 1) {
    //  this.comprarService.ListarTrabajos(this.parametro).subscribe(data => this.trabajos = data);
 }
}
  volver() {
    this.router.navigate(["/tabla-denuncia"]);
  }

}
