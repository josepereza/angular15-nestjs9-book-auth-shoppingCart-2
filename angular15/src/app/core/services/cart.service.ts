import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  constructor(private storage: StorageMap) {
    this.storage.get('Cart').subscribe((cart: any) => {
      if (cart) {
        console.log('nav', cart);
        this.cart = cart;
      }
    });
  }

  //addCart(product:any){
  //this.cart.push(product)

  //}
  numItem() {
    return this.cart.length;
  }

  itemsCart: any[] = [];

  addCart(product: any) {
    console.log('cartService', this.cart);
    if (this.cart.length == null) {
      this.cart.push(product);
      console.log('push', this.cart);
    } else {
      var id = product.id;
      let index: number = -1;

      for (let i = 0; i < this.cart.length; i++) {
        if (id === parseInt(this.cart[i].id)) {
          this.cart[i].qty = product.qty;
          index = i;
          break;
        }
      }
      if (index == -1) {
        this.cart.push(product);
        this.storage.set('Cart', this.cart).subscribe(() => {});
      }
    }
  }
  deleteItem(id: number) {
    const indice = this.cart.findIndex((elemento) => elemento.id == id);

    this.cart.splice(indice, 1);
    console.log(this.cart);
  }
}
