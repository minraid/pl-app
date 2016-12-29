import * as mongoose from 'mongoose';
import {ordersSchema} from './schema';

export const ordersModel = mongoose.model('Orders', ordersSchema);