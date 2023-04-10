import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  miUsuario={}
isActivated:boolean=false;
  constructor(private http:HttpClient ) { }

  login(user:any){

    console.log('authen service',user)
    return  this.http.post('http://localhost:3000/auth/login',user)
   }
   getPerfil(){
    return  this.http.get('http://localhost:3000/auth/user')

   }
}
