import {IOrderDocument, IOrderModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';

export class Product extends BaseRepository<IOrderDocument> {
  private _orderModel: IOrderModel;

  constructor(orderModel: IOrderModel) {
    super(orderModel);
    this._orderModel = orderModel;
  }
}