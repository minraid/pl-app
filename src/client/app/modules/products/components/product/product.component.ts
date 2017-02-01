import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Product } from "../../../../../shared/definitions/products";
import { ProductsService } from "../../../../../shared/services/products.service";

@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
  private product: Product = new Product();

  constructor(private Route: ActivatedRoute, private Products: ProductsService) {
    this.Route.params
      .switchMap(({id}: Params) => this.Products.get(id))
      .subscribe((product: Product) => this.product = product);
  }

  ngOnInit() {
  }

}
