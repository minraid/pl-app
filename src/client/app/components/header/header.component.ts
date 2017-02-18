import { Component, OnInit } from '@angular/core';
import { UserService } from "../../../shared/services/user.service";
import { User } from "../../../shared/definitions/users";
import { Observable } from "rxjs";
import { ProductsService } from "../../../shared/services/products.service";
import { CategoriesService } from "../../../shared/services/categories.service";
import { Product } from "../../../shared/definitions/products";
import { Category } from "../../../shared/definitions/categories";

@Component({
  selector: 'header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {
  private user: User = new User();
  private date: Date = new Date();
  private gmt: Date;
  private pst: Date = new Date();
  private est: Date = new Date();
  private products: Product[];
  private categories: Category[];

  constructor(private UserService: UserService,
              private Products: ProductsService,
              private Categories: CategoriesService) {
  }

  ngOnInit() {
    this.UserService.get()
      .subscribe(user => this.user = user);

    this.Products.retrieve()
      .subscribe(products => this.products = products);
    this.Categories.retrieve()
      .subscribe(categories => this.categories = categories);

    this.updateTime();

    Observable.interval(1000)
      .subscribe(this.updateTime.bind(this))
  }

  logout(e) {
    e.preventDefault();
    this.UserService.logout()
      .subscribe(res => console.log(res))
  }

  getCategoryProducts(category: Category): Product[] {
    if (this.products) {
      return this.products.filter(({category: {_id}}: Product) => category._id === _id);
    }
  }

  private updateTime() {
    this.date = new Date();
    this.setUTC(this.date);
    this.setPST(this.gmt);
    this.setEST(this.gmt);
  }

  private setUTC(date) {
    this.gmt = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
  }

  private setPST(date) {
    this.pst = new Date(date.getTime() - 8 * 60 * 60 * 1000)
  }

  private setEST(date) {
    this.est = new Date(date.getTime() - 5 * 60 * 60 * 1000)
  }
}
