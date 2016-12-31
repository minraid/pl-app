import { Query, Document, Model } from 'mongoose';
import { DocumentQuery } from 'mongoose';

interface IRead<T> {
  retrieve(): DocumentQuery<T[], Document>;
  findById(id: number): DocumentQuery<T, Document>;
  findOne(cond?: Object): DocumentQuery<T, Document>;
  find(cond: Object): DocumentQuery<T[], Document>;
}

interface IWrite<T> {
  create(item: T): Promise<T>;
  update(_id: number, item: Object): Query<T>;
  delete(_id: number): Query<void>;
}

export class BaseRepository<T extends Document> implements IRead<T>, IWrite<T> {

  private _model: Model<Document>;

  constructor(model: Model<Document>) {
    this._model = model;
  }

  retrieve(): DocumentQuery<Document[], Document> {
    return this._model.find({});
  }

  findById(id: number): DocumentQuery<Document, Document> {
    return this._model.findById(id);
  }

  findOne(cond?: Object): DocumentQuery<Document, Document> {
    return this._model.findOne(cond);
  }

  find(cond: Object): DocumentQuery<Document[], Document> {
    return this._model.find(cond);
  }

  create(item: T): Promise<T> {
    return new Promise((resolve, reject) => this._model.create(item).then(resolve, reject));
  }

  update(_id: number, item: Object): Query<T> {
    return this._model.update({_id}, item);
  }

  delete(_id: number): Query<void> {
    return this._model.remove({_id});
  }

}
