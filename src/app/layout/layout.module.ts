import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    NavMenuComponent,
    LandingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[NavMenuComponent]
    
})
export class LayoutModule { }
