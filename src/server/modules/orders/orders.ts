import { DocumentQuery, Document } from "mongoose";
import { IOrderDocument, IOrderModel } from './interfaces';
import { BaseRepository } from '../db/baseRepo';
import { ordersModel } from '../db/orders/model';
import { User } from "../users/users";
import { usersModel } from "../db/users/model";

export class Order extends BaseRepository<IOrderDocument> {
  private _orderModel: IOrderModel;

  constructor(orderModel: IOrderModel) {
    super(orderModel);
    this._orderModel = orderModel;
  }

  static get(id: number): DocumentQuery<IOrderDocument, Document>| DocumentQuery<IOrderDocument[], Document> {
    const order = new Order(ordersModel);
    if (id) {
      return order.findById(id)
        .populate('products user');
    }
    return order.retrieve()
      .populate('products user');
  }

  static search(params): DocumentQuery<IOrderDocument[], Document> {
    const order = new Order(ordersModel);
    const searchParams: any = {};
    if (params.from && params.to) {
      const to = new Date(params.to);
      searchParams.date = {'$gt': new Date(params.from), '$lte': new Date(to.getFullYear(), to.getMonth(), to.getDate(), 23, 59, 59)}
    }
    let sort = {};
    if (params.sort && params.order) {
      sort = {[params.sort]: params.order === 'ASC' ? 1 : -1};
    }
    return order.find(searchParams)
      .sort(sort)
      .populate('products user');
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
