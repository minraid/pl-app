import {IProductDocument, IProductModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';
import {productsModel} from '../db/products/model';

export class Product extends BaseRepository<IProductDocument> {
  private _productModel: IProductModel;

  constructor(productModel: IProductModel) {
    super(productModel);
    this._productModel = productModel;
  }
}