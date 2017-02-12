import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../../../../../shared/services/products.service";
import { Observable } from "rxjs";
import { Product } from "../../../../../shared/definitions/products";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
    private products: Observable<Product[]>;
    private params: any = {};
    private columns = [{
      key: 'title',
      title: 'Name'
    },{
      key: 'category.name',
      title: 'Category'
    },{
      key: 'brand.title',
      title: 'Brandname'
    },{
      key: 'manufacturer.title',
      title: 'Manufacturer'
    },{
      key: 'details.form',
      title: 'Form'
    },{
      key: 'details.activeSubstance',
      title: 'Active substance'
    },{
      key: 'details.dosage',
      title: 'Dosage'
    },{
      key: 'details.packaging',
      title: 'Packaging'
    },{
      key: 'details.pricePerPill',
      title: 'Price per pill'
    },{
      key: 'details.category',
      title: 'Type'
    }];

  constructor(private Products: ProductsService, private Router: Router) {
  }

  ngOnInit() {
    this.products = this.Products.retrieve();
  }

  onSelect({_id}: Product) {
    this.Router.navigate(['/products', _id]);
  }

}
