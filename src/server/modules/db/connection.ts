import * as mongoose from 'mongoose';
import { Counters } from '../counters/counters';

export class DBconnection {
  static connect() {
    mongoose.connect('mongodb://127.0.0.1/partner', CreateDefaults);
  }
}

function CreateDefaults() {
  const keys = ['categories', 'orders', 'products', 'userRoles', 'users'];
  Counters.createDefault(keys).then(() => {
    console.log('created default counters');
  })
}
