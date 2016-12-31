import {IUserRoleModel, IUserRoleDocument} from './interfaces';
import {BaseRepository} from '../db/baseRepo';

export class UserRole extends BaseRepository<IUserRoleDocument> {
  private _userRoleModel: IUserRoleModel;

  constructor(userRoleModel: IUserRoleModel) {
    super(userRoleModel);
    this._userRoleModel = userRoleModel;
  }
}
