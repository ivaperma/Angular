import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Auth } from '../interfaces/auth.interface';
import { tap, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth: Auth | undefined;

  get auth(): Auth {
    //desestructuración para asegurarme de que no cambia de ninguna manera
    return { ...this._auth! }
  }

  constructor( private http: HttpClient) { }

  // verificaAutenticacion(): Observable<boolean> | boolean{
	//   if (!localStorage.getItem('token')){
	// 	  return false;
	//   }
	//   return true;
  // }



  verificaAutenticacion(): Observable<boolean>{
    if ( !localStorage.getItem('token')){
      //el 'of' hace un observable, en este caso del false
      return of(false);  
    }

    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
            .pipe(
              map( auth => {
                this._auth = auth;
                return true;
              })
            );
  }

  login(){
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/1`)
                .pipe(
                  // almacena el auth en el this._auth
                  tap( auth => this._auth = auth),
                  // el tap siempre recibe el producto de la operación anterior
                  // le está grabando el user id en localstorage
                  tap( auth => localStorage.setItem('token', auth.id))
                );
  }

  // logout(){
  //   this._auth = undefined;
  // }
}
