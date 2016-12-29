import {Document, Model} from 'mongoose';

export interface ICountersDocument extends Document {
  seq: number;
}

export interface ICountersModel extends Model<ICountersDocument> {
  getSequence(id: string): any;
}