import {ICategoryDocument, ICategoryModel} from './interfaces';
import {BaseRepository} from '../db/baseRepo';
import { Query } from 'mongoose';
import { categoriesModel } from '../db/categories/model';

export class Category extends BaseRepository<ICategoryDocument> {
  private _categoryModel: ICategoryModel;

  constructor(categoryModel: ICategoryModel) {
    super(categoryModel);
    this._categoryModel = categoryModel;
  }

  static get(id: number): Query<ICategoryDocument> | Query<ICategoryDocument[]> {
    const category = new Category(categoriesModel);
    if (id) {
      return category.findById(id);
    }
    return category.retrieve();
  }

  static create(newCategory: ICategoryDocument): Promise<ICategoryDocument> {
    const category = new Category(categoriesModel);
    return category.create(newCategory);
  }

  static update(id: number, newCategory: ICategoryDocument): Query<ICategoryDocument> {
    const category = new Category(categoriesModel);
    return category.update(id, newCategory);
  }

  static delete(id: number): Query<void> {
    const category = new Category(categoriesModel);
    return category.delete(id);
  }
}
