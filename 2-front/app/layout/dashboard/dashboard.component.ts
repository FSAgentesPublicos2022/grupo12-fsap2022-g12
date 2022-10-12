import { Component, OnInit } from '@angular/core';
import {MatBadgeModule} from '@angular/material/badge';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  simpleContent = 'S';
  overlap = true;
  disabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
