import * as mongoose from 'mongoose';
import {productsSchema} from './schema';

export const productsModel = mongoose.model('Products', productsSchema);