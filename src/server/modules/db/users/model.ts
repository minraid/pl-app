import * as mongoose from 'mongoose';
import {IUserModel} from '../../users/interfaces';
import {usersSchema} from './schema';

export const usersModel = <IUserModel>mongoose.model('Users', usersSchema);