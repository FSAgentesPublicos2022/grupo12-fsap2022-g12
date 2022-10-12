import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//************componentes************
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { LandingComponent } from './layout/landing/landing.component';
import { PiePaginaComponent } from './layout/pie-pagina/pie-pagina.component';
import { LoginComponent } from './gestion-users/login/login.component';
import { RegistroComponent } from './gestion-users/registro/registro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//**************Servicios****************
import { LoginService } from './services/login.service';
import { CompraVentaComponent } from './compras/compra-venta/compra-venta.component';
import { TransaccionesComponent } from './historicos/transacciones/transacciones.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import {MatBadgeModule} from '@angular/material/badge';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LandingComponent,
    PiePaginaComponent,
    LoginComponent,
    CompraVentaComponent,
    TransaccionesComponent,
    DashboardComponent,
  

    
   // RegistroComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatBadgeModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'dashboard', component: DashboardComponent },
      
     
      { path: '*', redirectTo: '' } //a home
    ]),
    BrowserAnimationsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
