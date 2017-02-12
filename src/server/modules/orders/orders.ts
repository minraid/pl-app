import { DocumentQuery, Document } from "mongoose";
import { IOrderDocument, IOrderModel } from './interfaces';
import { BaseRepository } from '../db/baseRepo';
import { ordersModel } from '../db/orders/model';

export class Order extends BaseRepository<IOrderDocument> {
  private _orderModel: IOrderModel;

  constructor(orderModel: IOrderModel) {
    super(orderModel);
    this._orderModel = orderModel;
  }

  static get(id: number): DocumentQuery<IOrderDocument, Document>| DocumentQuery<IOrderDocument[], Document> {
    const order = new Order(ordersModel);
    if (id) {
      return order.findById(id);
    }
    return order.retrieve();
  }

  static search(params): DocumentQuery<IOrderDocument[], Document> {
    const order = new Order(ordersModel);
    const searchParams: any = {};
    if (params.from && params.to) {
      searchParams.date = {'$gt': new Date(params.from), '$lte': new Date(params.to)}
    }
    let sort = {};
    if (params.sort && params.order) {
      sort = {[params.sort]: params.order === 'ASC' ? 1 : -1};
    }
    return order.find(searchParams)
      .sort(sort);
  }

  static create(newOrder: IOrderDocument): Promise<IOrderDocument> {
    const order = new Order(ordersModel);
    return order.create(newOrder);
  }

  static update(id: number, newOrder: IOrderDocument): DocumentQuery<IOrderDocument, Document> {
    const order = new Order(ordersModel);
    return order.update(id, newOrder);
  }

  static delete(id: number): DocumentQuery<void, Document> {
    const order = new Order(ordersModel);
    return order.delete(id);
  }
}
