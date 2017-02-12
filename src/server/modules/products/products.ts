import {IProductDocument, IProductModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';
import { Query } from 'mongoose';
import { productsModel } from '../db/products/model';
import { DocumentQuery, Document } from "mongoose";

export class Product extends BaseRepository<IProductDocument> {
  private _productModel: IProductModel;

  constructor(productModel: IProductModel) {
    super(productModel);
    this._productModel = productModel;
  }

  static get(id: number): DocumentQuery<IProductDocument, Document>| DocumentQuery<IProductDocument[], Document> {
    const product = new Product(productsModel);
    if (id) {
      return product.findById(id);
    }
    return product.retrieve();
  }

  static search(params): DocumentQuery<IProductDocument[], Document> {
    const product = new Product(productsModel);
    const searchParams: any = {};
    let sort = {};
    if (params.sort && params.order) {
      sort = {[params.sort]: params.order === 'ASC' ? 1 : -1};
    }
    return product.find(searchParams)
      .sort(sort);
  }

  static create(newProduct: IProductDocument): Promise<IProductDocument> {
    const product = new Product(productsModel);
    return product.create(newProduct);
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
