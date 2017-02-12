import { Component, AfterViewInit } from '@angular/core';
import { Order } from "../../../../../shared/definitions/orders";
import { OrdersService } from "../../../../../shared/services/orders.service";
import { Router } from "@angular/router";

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements AfterViewInit {
  private orders: any[];
  private params: any = {};
  private columns = [{
    key: '',
    title: 'Customer ID'
  }, {
    key: '_id',
    title: 'Order ID'
  }, {
    key: 'date',
    title: 'Order date',
    filter: 'date'
  }, {
    key: 'address.country',
    title: 'Country'
  }, {
    key: 'amount',
    title: 'Total amount'
  }, {
    key: 'shipmentDate',
    title: 'Shipment date',
    filter: 'date'
  }, {
    key: 'tracking',
    title: 'Tracking'
  }, {
    key: 'shippingReturn.active',
    title: 'Return'
  }, {
    key: 'shippingReturn.date',
    title: 'Return date'
  }, {
    key: 'shippingReturn.cost',
    title: 'Cost of return'
  }, {
    key: 'overweight.active',
    title: 'Overweight'
  }];

  constructor(private Orders: OrdersService,
  private Router: Router) {
  }

  ngAfterViewInit() {
    this.update();
  }

  onSelect({_id}: Order) {
    this.Router.navigate(['/orders', _id]);
  }

  update() {
    this.Orders.search(this.params)
      .subscribe(orders => this.orders = orders);
  }

}
