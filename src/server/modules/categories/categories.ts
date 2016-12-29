import {ICategoryDocument, ICategoryModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';

export class Product extends BaseRepository<ICategoryDocument> {
  private _categoryModel: ICategoryModel;

  constructor(categoryModel: ICategoryModel) {
    super(categoryModel);
    this._categoryModel = categoryModel;
  }
}