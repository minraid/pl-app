import { Component, OnInit } from '@angular/core';
import { Product } from "../../../../../shared/definitions/products";
import { ProductsService } from "../../../../../shared/services/products.service";
import { ActivatedRoute, Params } from "@angular/router";
import { CategoriesService } from "../../../../../shared/services/categories.service";
import { Category } from "../../../../../shared/definitions/categories";

@Component({
  templateUrl: 'products-list.component.html'
})
export class ProductsListComponent implements OnInit {
  private products: Product[];
  private category: Category;

  constructor(private Products: ProductsService,
              private Route: ActivatedRoute,
              private Categories: CategoriesService) {
  }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      this.Products.retrieve()
        .subscribe(products => {
          if (params['id']) {
            this.products = products.filter(({category: {_id}}: Product) => _id === +params['id']);
          } else {
            this.products = products;
          }
        });
      if (params['id']) {
        this.Categories.get(params['id'])
          .subscribe(category => this.category = category)
      }
    });
  }

}
