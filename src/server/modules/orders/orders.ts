import {IOrderDocument, IOrderModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';
import { ordersModel } from '../db/orders/model';
import { Query } from 'mongoose';

export class Order extends BaseRepository<IOrderDocument> {
  private _orderModel: IOrderModel;

  constructor(orderModel: IOrderModel) {
    super(orderModel);
    this._orderModel = orderModel;
  }

  static get(id: number): Query<IOrderDocument> | Query<IOrderDocument[]> {
    const order = new Order(ordersModel);
    if (id) {
      return order.findById(id);
    }
    return order.retrieve();
  }

  static create(newOrder: IOrderDocument): Promise<IOrderDocument> {
    const order = new Order(ordersModel);
    return order.create(newOrder);
  }

  static update(id: number, newOrder: IOrderDocument): Query<IOrderDocument> {
    const order = new Order(ordersModel);
    return order.update(id, newOrder);
  }

  static delete(id: number): Query<void> {
    const order = new Order(ordersModel);
    return order.delete(id);
  }
}
