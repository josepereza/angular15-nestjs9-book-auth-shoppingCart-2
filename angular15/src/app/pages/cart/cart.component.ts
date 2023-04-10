import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BookCart } from 'src/app/core/interfaces/bookCart';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { OrderService } from 'src/app/core/services/order.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  @Input() ocultar: boolean = false;
  user: any;
  dataSource: any;
  books: any[] = [];
  displayedColumns: string[] = ['image', 'qty', 'price', 'subtotal', 'accion'];
  total = 0;
  constructor(
    private cartService: CartService,
    private authSevice: AuthService,
    private http: HttpClient,
    private orderService: OrderService,
    private storage:StorageMap
  ) {
    this.authSevice.getPerfil().subscribe((data: any) => {
      this.user = data.id;
    });
  
    this.storage.get('Cart').subscribe((data:any)=>{
      this.books=data
      this.dataSource = new MatTableDataSource(this.books);
      console.log('cartcomponent', this.books);
      this.total = this.books.reduce(function (acc: any, val: any) {
        return acc + val.price * val.qty;
      }, 0);
    })
  }
  ngOnInit(): void {
   
  }
  get Total(){
    this.total = this.cartService.cart.reduce(function (acc: any, val: any) {
      return acc + val.price * val.qty;
    }, 0);
    return this.total
  }
  get cart(){
   
    return this.cartService.cart
  }
  delete(prodId: any) {
    this.cartService.deleteItem(prodId);
    this.storage.set('Cart',this.cart).subscribe()
    this.dataSource = new MatTableDataSource(this.cartService.cart);
    
  }
  comprar() {
    const bookCart = this.cartService.cart.map((book) => {
      return {
        bookId: book.id,
        bookCount: book.qty,
        totalAmount: book.qty * book.price,
        userId: this.user,
      };
    });
    console.log('cartBookbuy', bookCart);
   
    this.orderService.createOrder({
        userId: this.user,
        amount: this.total,
        orderItems: bookCart,
      }).subscribe(data=>{
        console.log(data)
      })
      
  }
}
