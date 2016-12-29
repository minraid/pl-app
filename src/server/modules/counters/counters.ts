import {ICountersModel} from "./interfaces";
import {CountersModel} from '../db/counters/model';

export class Counters {
  private countersModel: ICountersModel;

  constructor(countersModel: ICountersModel) {
    this.countersModel = countersModel;
  }

  static get(id: string, doc: any, next: Function) {
    const counter = new Counters(CountersModel);
    return counter.getSequence(id).then(({seq}) => {
      doc._id = seq;
      next();
      return this;
    });
  }

  private getSequence(id: string) {
    return this.countersModel.getSequence(id);
  }
}