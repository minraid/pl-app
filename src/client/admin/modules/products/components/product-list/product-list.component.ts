import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../services/products.service";
import { Observable } from "rxjs";
import { Product } from "../../products";

@Component({
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
    private products: Observable<Product[]>;

  constructor(private Products: ProductsService) {
  }

  ngOnInit() {
    this.products = this.Products.retrieve();
  }

}
