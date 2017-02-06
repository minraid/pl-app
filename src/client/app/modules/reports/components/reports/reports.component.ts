import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { OrdersService } from "../../../../../shared/services/orders.service";
import { Order } from "../../../../../shared/definitions/orders";

@Component({
  selector: 'reports',
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit {
  private orders: Observable<any[]>;
  private searchParams: any = {};
  private columns = [{
    key: '_id',
    title: 'Order ID'
  }, {
    key: 'date',
    title: 'Order date',
    filter: 'date'
  }, {
    key: 'customer.lastName',
    title: 'Customer',
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

  get params() {
    return this.searchParams;
  }

  set params(val) {
    this.searchParams = val;
    console.log('update');
  }

  constructor(private Orders: OrdersService) {
  }

  ngOnInit() {
    this.orders = this.Orders.retrieve();
  }

  onSelect(order: Order) {
    console.log(order);
  }

}
