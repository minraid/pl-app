import { Component, OnInit } from '@angular/core';
import { OrdersService } from "../../../../../shared/services/orders.service";
import { Order, Product } from "../../../../../shared/definitions/orders";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  templateUrl: 'order.component.html'
})
export class OrderComponent implements OnInit {
  private order: Order = new Order()

  constructor(private Orders: OrdersService, private Route: ActivatedRoute) {
  }

  ngOnInit() {
    this.Route.params.subscribe((params: Params) => {
      const {id} = params;
      this.Orders.get(id).subscribe((order: Order) => this.order = order)
    })
  }

  calculateAmount({products}: Order) {
    return products.reduce((sum: number, {details: {pricePerPill, quantity}, amount}: Product) => {
      return sum + (amount * pricePerPill * quantity);
    }, 0)
  }

  calculateTotal(order: Order) {
    return this.calculateAmount(order) + order.deliveryCost
  }

}
