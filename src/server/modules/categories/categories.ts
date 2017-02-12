import { ICategoryDocument, ICategoryModel } from './interfaces';
import { BaseRepository } from '../db/baseRepo';
import { categoriesModel } from '../db/categories/model';
import { DocumentQuery, Document } from "mongoose";

export class Category extends BaseRepository<ICategoryDocument> {
  private _categoryModel: ICategoryModel;

  constructor(categoryModel: ICategoryModel) {
    super(categoryModel);
    this._categoryModel = categoryModel;
  }

  static get(id: number): DocumentQuery<ICategoryDocument, Document> | DocumentQuery<ICategoryDocument[], Document> {
    const category = new Category(categoriesModel);
    if (id) {
      return category.findById(id);
    }
    return category.retrieve();
  }

  static search(params): DocumentQuery<ICategoryDocument[], Document> {
    const category = new Category(categoriesModel);
    const searchParams: any = {};
    let sort = {};
    if (params.sort && params.order) {
      sort = {[params.sort]: params.order === 'ASC' ? 1 : -1};
    }
    return category.find(searchParams)
      .sort(sort);
  }

  static create(newCategory: ICategoryDocument): Promise<ICategoryDocument> {
    const category = new Category(categoriesModel);
    return category.create(newCategory);
  }

  static update(id: number, newCategory: ICategoryDocument): DocumentQuery<ICategoryDocument, Document> {
    const category = new Category(categoriesModel);
    return category.update(id, newCategory);
  }

  static delete(id: number): DocumentQuery<void, Document> {
    const category = new Category(categoriesModel);
    return category.delete(id);
  }
}
