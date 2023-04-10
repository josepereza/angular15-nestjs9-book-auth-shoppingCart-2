import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageMap } from '@ngx-pwa/local-storage';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
constructor(
  private authService:AuthService,
  private storage:StorageMap,
  private cartService:CartService
  ){

}

get numItem(){
  return this.cartService.numItem()
}
  ngOnInit(): void {
  this.storage.get('userCart').subscribe((user)=>{
    if (user){
      console.log('nav',user)
      this.authService.isActivated=true
    }
  })
  }
get authActivated(){
  return this.authService.isActivated
}
logout(){
  this.authService.isActivated=false
 this.storage.delete('userCart').subscribe(data=>{
  console.log(data)
 })
}

}
