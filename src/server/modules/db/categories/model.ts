import * as mongoose from 'mongoose';
import {categoriesSchema} from './schema';

export const categoriesModel = mongoose.model('Category', categoriesSchema);