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
import { TransaccionesComponent } from './historicos/Transacciones/Transacciones.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

import { CampoRequeridoComponent } from './layout/campo-requerido/campo-requerido.component';
import { ComprarComponent } from './compras/comprar/comprar.component';
import { TransferirComponent } from './compras/transferir/transferir.component';
import { TenenciaComponent } from './historicos/tenencia/tenencia.component';


@NgModule({
  declarations:[
    AppComponent,
    NavMenuComponent,
    LandingComponent,
    PiePaginaComponent,
    LoginComponent,
    CompraVentaComponent,
    TransaccionesComponent,
    DashboardComponent,
    CampoRequeridoComponent,
    RegistroComponent,
    ComprarComponent,
    TransferirComponent,
    TenenciaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'landing', component: LandingComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'transacciones', component: TransaccionesComponent },
      { path: 'compra-venta', component: CompraVentaComponent },
      { path: 'comprar', component: ComprarComponent },
      { path: 'comprar/:id', component: ComprarComponent },
      { path: 'transferir', component: TransferirComponent },
      { path: 'transferir/:id', component: TransferirComponent },
      
     
      { path: '*', redirectTo: '' } //a home
    ]),
    BrowserAnimationsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
