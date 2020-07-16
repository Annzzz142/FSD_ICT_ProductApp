import { Component, OnInit } from '@angular/core';
import { ProductModel } from './product.model';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  title:String = "Product List";
  constructor(private productService: ProductService, private router: Router) { }
  // Product is the model class for a product item
  products : ProductModel[];

  // image properties
  imageWidth : number = 50;
  imageMargin : number = 2;

  showImage : boolean = false;

  // craeting service object for calling getProducts()
  // constructor(private productService : ProductService) { }
  
  toggleImage():void{
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    // calling getProdcuts() and loading the products array
    this.productService.getProducts().subscribe((data) => {
    this.products = JSON.parse(JSON.stringify(data));
    console.log(this.products);
    })
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe((data) => {
      console.log(data);
    });
    alert("Product deleted successfully");
    this.router.navigate(['/']);
    location.reload();
  }

  edit(id){
    this.productService.pid = id;
    this.router.navigate(['edit']);
    console.log(this.products);
    this.editProduct = this.products.find(pdt => pdt._id === id);
    console.log(this.editProduct);
    this.productService.editItem = this.editProduct;
  }
}
