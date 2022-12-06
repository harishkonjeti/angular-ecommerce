import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  products:Product[] = [];

  ngOnInit(): void {
    this.productList();
  }
  
  productList(){
    this.productservice.getProductList().subscribe(
      response => this.products=response._embedded.products
    );
  }

}
