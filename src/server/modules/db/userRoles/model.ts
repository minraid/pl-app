import * as mongoose from 'mongoose';
import {userRolesSchema} from './schema';

export const userRolesModel = mongoose.model('UserRole', userRolesSchema);