import * as mongoose from 'mongoose';
import {userRolesSchema} from './schema';
import { IUserRoleModel } from "../../userRoles/interfaces";

export const userRolesModel = <IUserRoleModel>mongoose.model('UserRoles', userRolesSchema);
