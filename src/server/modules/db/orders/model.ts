import * as mongoose from 'mongoose';
import {ordersSchema} from './schema';
import { IOrderModel } from '../../orders/interfaces';

export const ordersModel = <IOrderModel>mongoose.model('Orders', ordersSchema);
