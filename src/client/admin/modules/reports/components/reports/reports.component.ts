import { Component, OnInit } from '@angular/core';
import { ReportsService } from "../../service/reports.service";
import { Observable } from "rxjs";
import { Order } from "../../../../../shared/definitions/orders";

@Component({
  templateUrl: 'reports.component.html'
})
export class ReportsComponent implements OnInit {
  private orders: Observable<any[]>;
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

  constructor(private Reports: ReportsService) {
  }

  ngOnInit() {
    this.orders = this.Reports.get({test: 'test', test2: 'test2'});
  }

  onSelect(order: Order) {
    console.log(order);
  }

}
