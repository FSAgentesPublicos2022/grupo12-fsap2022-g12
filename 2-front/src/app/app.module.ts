import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './layout/nav-menu/nav-menu.component';
import { LandingComponent } from './layout/landing/landing.component';
import { PiePaginaComponent } from './layout/pie-pagina/pie-pagina.component';
import { LoginComponent } from './gestion-users/login/login.component';
import { TransaccionesComponent } from './historicos/Transacciones/Transacciones.component';




@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LandingComponent,
    PiePaginaComponent,
    LoginComponent,
    TransaccionesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: LandingComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },

      { path: '*', redirectTo: '' } //a home
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
