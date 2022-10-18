import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  email: any

  constructor() { }

  async ngOnInit(): Promise<any>
  {
   if (await localStorage.getItem("mail"))
   { 
    this.email = localStorage.getItem("mail");
//    console.log(this.email);
  }
   
    else{this.email ="nada"}; 
   
  }


}
