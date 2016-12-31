import * as mongoose from 'mongoose';
import {categoriesSchema} from './schema';
import { ICategoryModel } from '../../categories/interfaces';

export const categoriesModel = <ICategoryModel>mongoose.model('Category', categoriesSchema);
