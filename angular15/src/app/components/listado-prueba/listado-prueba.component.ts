import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-prueba',
  templateUrl: './listado-prueba.component.html',
  styleUrls: ['./listado-prueba.component.css']
})
export class ListadoPruebaComponent {
  libros:any[]=[]
constructor(private  http:HttpClient){
  const auth_token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY3ODQ0NzQxMSwiZXhwIjoxNjc4NDU0NjExfQ.2NAO3XszTqXmzblyxuDdid05IGpFMf_WXmgB4mfDV1U'
  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${auth_token}`
  })
this.http.get('http://localhost:3000/books', { headers: headers }).subscribe((data:any)=>{
  this.libros=data
  console.log(this.libros)
})
}
}
