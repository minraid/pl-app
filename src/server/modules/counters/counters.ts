import { ICountersModel, ICountersDocument } from "./interfaces";
import {CountersModel} from '../db/counters/model';
import { DocumentQuery } from 'mongoose';
import { Document } from 'mongoose';

export class Counters {
  private countersModel: ICountersModel;

  constructor(countersModel: ICountersModel) {
    this.countersModel = countersModel;
  }

  static createDefault(keys: string[]) {
    const counter = new Counters(CountersModel);
    const promises = keys.map(key => {
      return counter.find(key).then(value => {
        if (!value) {
          return counter.create(key);
        }
      })
    });
    return Promise.all(promises);
  }

  static get(id: string, doc: any, next: Function) {
    const counter = new Counters(CountersModel);
    return counter.getSequence(id).then(({seq}) => {
      doc._id = seq;
      next();
      return this;
    });
  }

  private find(id: string): DocumentQuery<Document, Document> {
    return this.countersModel.findById(id);
  }

  private create(_id: string):  Promise<ICountersDocument> {
    return this.countersModel.create({_id});
  }

  private getSequence(id: string) {
    return this.countersModel.getSequence(id);
  }
}
