import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../../services/products.service";
import { IProduct } from "../../products";

@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
  private product: IProduct;

  constructor(private Route: ActivatedRoute, private Products: ProductsService) {
  }

  ngOnInit() {
    this.Route.params
      .switchMap(({id}: Params) => this.Products.get(id))
      .subscribe((product: IProduct) => this.product = product);
  }

}
