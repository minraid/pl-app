import * as mongoose from 'mongoose';
import { Counters } from '../counters/counters';
import { UserRole } from "../userRoles/userRole";

export class DBconnection {
  static connect() {
    mongoose.connect('mongodb://127.0.0.1/partner', CreateDefaults);
  }
}

function CreateDefaults() {
  const counterKeys = ['categories', 'orders', 'products', 'userRoles', 'users'];
  const roles = [{type: 'ADMIN', title: 'Admin'}, {type: 'CUSTOMER', title: 'Customer'}];
  Promise.all([
    Counters.createDefault(counterKeys),
    UserRole.createDefault(roles)
  ]).then(() => {
    console.log('DataBase initialized');
  })
}
