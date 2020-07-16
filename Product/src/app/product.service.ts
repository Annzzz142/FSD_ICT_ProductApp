import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get("http://localhost:3000/products");
  }

  newProduct(item){
    return this.http.post("http://localhost:3000/insert", {"product": item})
    .subscribe(data => {console.log(data)})
  }

  deleteProduct(id){
    return this.http.post("http://localhost:3000/delete",{"pid":id});
  }

  update(item){
    return this.http.get("http://localhost:3000/update", {"product":item,"pid":this.pid });
    .subscribe(data => {console.log(data)})
  }

  loginUser(){
    return this.http.get("http://localhost:3000/login");
  }
}
