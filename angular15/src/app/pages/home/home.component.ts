import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BookCart } from 'src/app/core/interfaces/bookCart';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  libros:any[]=[]
  bookArray:any[]=[]
  constructor(private  http:HttpClient , private cartService:CartService, private storage:StorageMap){
    
  this.http.get('http://localhost:3000/books').subscribe((data:any)=>{
    this.libros=data.items
    console.log(this.libros)
    this.bookArray=this.libros.map(product=>{
      return  {...product,qty:1}
     })
  })
  }
 
   addtoCart(product:BookCart){
   this.cartService.addCart(product)
   this.storage.set('Cart',this.cartService.cart).subscribe()
   }
   inc(prod:BookCart){
     prod.qty! +=1
     }
     dec(prod:BookCart){
       if(prod.qty !=1){
           prod.qty! -=1
     
       }
   }
}
