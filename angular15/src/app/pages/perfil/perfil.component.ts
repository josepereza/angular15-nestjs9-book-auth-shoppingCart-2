import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
constructor(private authService:AuthService , private storage:StorageMap , private http:HttpClient){
 
}
  ngOnInit(): void {
    this.storage.get('userCart').subscribe((user) => {
      console.log('storage',user);
    });
    this.http.get('http://localhost:3000/auth/user').subscribe(data=>{
      console.log('http', data)
    })
  }
  
}
