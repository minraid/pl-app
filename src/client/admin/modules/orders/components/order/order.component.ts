import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../../../../../shared/services/orders.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Order } from "../../../../../shared/definitions/orders";
import { Product } from "../../../../../shared/definitions/products";
import { FormControl } from "@angular/forms";
import { ProductsService } from "../../../../../shared/services/products.service";

@Component({
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  private countries: any = ['States'];
  private order: Order = new Order();
  private products: Product[];

  constructor(private Orders: OrdersService,
              private Products: ProductsService,
              private Route: ActivatedRoute,
              private Router: Router) {
  }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      const {id} = params;
      this.Orders.get(id).subscribe((order: Order) => this.order = order)
    });
    this.Products.retrieve()
      .subscribe((products: Product[]) => this.products = products);
  }

  addProduct() {
    /* workaround to disable removing value from select */
    const tmp = this.order.products[this.order.products.length - 1];
    this.order.products[this.order.products.length - 1] = null;
    this.order.products.push(new Product());
    setTimeout(() => this.order.products[this.order.products.length - 2] = tmp);
  }

  updateAmount() {
    this.order.amount = this.order.products
      .reduce((amount: number, {details: {pricePerPill, quantity}}: Product) => amount + pricePerPill * (quantity || 0), 0);
  }

  inProducts(listProduct: Product): boolean {
    return <boolean>this.order.products.find((product: Product) => product && listProduct._id === product._id);
  }

  save(form: FormControl) {
    if (form.valid) {
      this.Orders.save(this.order)
        .subscribe(() => this.Router.navigate(['/reports']));
    }
  }

}
