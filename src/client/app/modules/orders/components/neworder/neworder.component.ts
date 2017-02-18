import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Order } from "../../../../../shared/definitions/orders";
import { ProductsService } from "../../../../../shared/services/products.service";
import { Product } from "../../../../../shared/definitions/products";
import { OrdersService } from "../../../../../shared/services/orders.service";
import { UserService } from "../../../../../shared/services/user.service";
import { User } from "../../../../../shared/definitions/users";

@Component({
  selector: 'orders',
  templateUrl: 'neworder.component.html'
})
export class NewOrderComponent implements OnInit {
  private countries: any = ['States'];
  private order: Order = new Order();
  private products: Product[];

  constructor(private Products: ProductsService,
              private Orders: OrdersService,
              private UserService: UserService) {
  }

  ngOnInit() {
    this.Products.retrieve()
      .subscribe((products: Product[]) => this.products = products);
    this.UserService.get()
      .subscribe((user: User) => {
        this.order.user = user;
      })
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
    return <boolean>this.order.products.find((product: Product) => product && listProduct._id === product._id)
  }

  save(form: FormControl) {
    if (form.valid) {
      this.Orders.save(this.order)
        .subscribe(data => console.log(data));
    }
  }
}
