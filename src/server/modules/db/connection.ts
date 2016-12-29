import * as mongoose from 'mongoose';

export class DBconnection {
  static connect() {
    mongoose.connect('mongodb://127.0.0.1/partner');
  }
}