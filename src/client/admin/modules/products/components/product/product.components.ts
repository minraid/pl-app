import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { ProductsService } from "../../../../../shared/services/products.service";
import { Product } from "../../../../../shared/definitions/products";
import { Category } from "../../../../../shared/definitions/categories";
import { CategoriesService } from "../../../../../shared/services/categories.service";
import { UploadService } from "../../../../../shared/services/upload.service";

@Component({
  templateUrl: 'product.component.html'
})
export class ProductComponent implements OnInit {
  private product: Product = new Product();
  private categories: Category[];

  constructor(private Route: ActivatedRoute,
              private Products: ProductsService,
              private Categories: CategoriesService,
              private Upload: UploadService) {
  }

  ngOnInit() {
    this.Route.params
      .switchMap(({id}: Params) => this.Products.get(id))
      .subscribe((product: Product) => this.product = product);

    this.Categories.retrieve()
      .subscribe((categories: Category[]) => this.categories = categories);
  }

  upload(e, field: string) {
    this.Upload.upload(e.target.files[0])
      .subscribe(name => this.setValue(this.product, field, name));
  }

  setValue(item, key, value) {
    key.split('.').reduce((prev, curr, index, array) => {
      if (index < array.length - 1) {
        return prev[curr]
      } else if (prev) {
        return prev[curr] = value;
      }
    }, item);
  }

  onSubmit(form) {
    if (form.valid) {
      this.Products.save(this.product)
        .subscribe(data => console.log(data));
    }
  }
}
