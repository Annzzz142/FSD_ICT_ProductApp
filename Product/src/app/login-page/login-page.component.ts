import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../product-list/product.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  title:String = "Login";
  constructor(private ProductService: ProductService, private router: Router) { }
  
  ngOnInit(): void {
  }

  Login(userData){
    this.ProductService.loginUser = userData;
    this.router.navigate(['login']);
    console.log(this.Login);
    this.Login = this.Login.find(user => user.user_name === userName);
    console.log(this.Login);
  }

}
