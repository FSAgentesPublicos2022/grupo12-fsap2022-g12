import { Component, OnInit } from '@angular/core';
import { CuentaService } from 'src/app/services/cuenta.service'; 
import { Router, ActivatedRoute } from '@angular/router';
import { listacuentas } from '../../modelos_interfaces/cuenta';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
 cuenta: listacuentas[] = [];

  constructor(private api:CuentaService) { }
  

 ngOnInit(): void{
   
  this.api.getcuentas().subscribe(data =>{
    this.cuenta = data;
  })

}
// {
  // if (await localStorage.getItem("mail"))
  // { 
  //  this.email = localStorage.getItem("mail");
//    console.log(this.email);
//  }
   
    // else{this.email ="nada"}; 
   
  // }
}
