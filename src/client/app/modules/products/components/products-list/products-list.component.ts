import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Product } from "../../../../../shared/definitions/products";
import { ProductsService } from "../../../../../shared/services/products.service";

@Component({
  templateUrl: 'products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  private products: Observable<Product[]>;

  constructor(private Products: ProductsService) {
  }

  ngOnInit() {
    this.products = this.Products.retrieve();
  }

}
