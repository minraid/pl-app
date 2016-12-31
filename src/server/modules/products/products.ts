import {IProductDocument, IProductModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';
import { Query } from 'mongoose';
import { productsModel } from '../db/products/model';

export class Product extends BaseRepository<IProductDocument> {
  private _productModel: IProductModel;

  constructor(productModel: IProductModel) {
    super(productModel);
    this._productModel = productModel;
  }

  static get(id: number): Query<IProductDocument> | Query<IProductDocument[]> {
    const product = new Product(productsModel);
    if (id) {
      return product.findById(id);
    }
    return product.retrieve();
  }

  static create(newCategory: IProductDocument): Promise<IProductDocument> {
    const product = new Product(productsModel);
    return product.create(newCategory);
  }

  static update(id: number, newCategory: IProductDocument): Query<IProductDocument> {
    const product = new Product(productsModel);
    return product.update(id, newCategory);
  }

  static delete(id: number): Query<void> {
    const product = new Product(productsModel);
    return product.delete(id);
  }
}
