import {Model, Document} from 'mongoose';

export interface ICategoryDocument extends Document {
  _id: number;
  name: string;
}

export interface ICategoryModel extends Model<ICategoryDocument> {}