import { Component, OnInit } from '@angular/core';
import { ProductsService, IProduct } from "../../services/products.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
    private products: Observable<IProduct[]>|Observable<IProduct>;

  constructor(private Products: ProductsService) {
  }

  ngOnInit() {
    this.products = this.Products.get();
  }

}
