import {Document, Model} from 'mongoose';

export interface IUserRoleDocument extends Document {
  _id: number,
  title: string,
  type: string
}

export interface IUserRoleModel extends Model<IUserRoleDocument> {}
