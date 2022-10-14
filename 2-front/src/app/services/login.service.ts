import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; //me parece que no hace falta.
import * as moment from 'moment';
//la siguiente libreria se utiliza para decdificar el token
import jwt_decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlBase :string ="https://localhost:44393/";

  constructor(private http: HttpClient, private router: Router) {

  }



  ////   ************** LOGIN *****************
  public  login(usuario: any): Observable<any> {
     return  this.http.post( this.urlBase + "api/Usuarios/login/", usuario).pipe(
      map( res =>  {

       localStorage.setItem('token', JSON.stringify(res));
       
        this.guardarToken(res);
        
        const tokenInfo = this.getDecodedAccessToken(JSON.stringify(res)); // decode token
       const expireDate = tokenInfo.exp; // get token expiration dateTime
       console.log(tokenInfo); // mostramos el token decodificado
       const correo = tokenInfo.email;
       const userdecode = tokenInfo.unique_name
       localStorage.setItem('mail', JSON.stringify(correo));
        localStorage.setItem('nombreUser', JSON.stringify(userdecode));


         return res;
   
      })
    );
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
  private guardarToken(authResult: any) {
    const expiresAt = moment().add(authResult.expiresAt, 'seconds');
    localStorage.setItem("expiresAt", JSON.stringify(expiresAt.valueOf()));
  }

  private borrarToken() {
    //localStorage.removeItem("token");
    localStorage.removeItem("expiresAt");
  }

  public isLoggedIn(): boolean {
    try {
      return moment().isBefore(this.getExpiration());
    } catch (e) {
      return false;
    }    
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem("expiresAt") || "";
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }


  public cerrarSession() {
    return this.http.get(this.urlBase + "api/Usuarios/cerrarSession")
      .pipe(map(res => {
        this.borrarToken();
        return res;
    }));
  }
  //   *************** FIN LOGIN ***************

}
