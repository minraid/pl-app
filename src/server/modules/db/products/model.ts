import * as mongoose from 'mongoose';
import {productsSchema} from './schema';
import { IProductModel } from '../../products/interfaces';

export const productsModel = <IProductModel>mongoose.model('Products', productsSchema);
