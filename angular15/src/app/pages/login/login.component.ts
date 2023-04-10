import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { StorageMap } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(
    private router:Router, 
    private authService:AuthService,
    private storage: StorageMap

    ) { }
  login(){

    this.authService.login({email:this.email.value, password: this.password.value}).subscribe((data:any)=>{
      console.log('pagina de login',data)
      this.authService.isActivated=true;
    
      this.storage.set('userCart', data).subscribe(() => {
  
      });
      
     this.router.navigate(['home'])
    
    })
    
    
    }
}
