import { IUserRoleModel, IUserRoleDocument } from './interfaces';
import { userRolesModel } from "../db/userRoles/model";
import { DocumentQuery } from "mongoose";

export class UserRole {
  private userRoleModel: IUserRoleModel;

  constructor(userRoleModel: IUserRoleModel) {
    this.userRoleModel = userRoleModel;
  }

  static createDefault(roles) {
    const userRole = new UserRole(userRolesModel);
    const promises = roles.map(role => {
      const {type} = role;
      return userRole.find({type}).then(value => {
        if (!value) {
          return userRole.create(role);
        }
      })
    });
    return Promise.all(promises);
  }

  static get(type: string): DocumentQuery<IUserRoleDocument, IUserRoleDocument> {
    const userRole = new UserRole(userRolesModel);
    return userRole.find({type});
  }

  private find(role): DocumentQuery<IUserRoleDocument, IUserRoleDocument> {
    return this.userRoleModel.findOne(role);
  }

  private create(role: IUserRoleDocument): Promise<IUserRoleDocument[]> {
    return this.userRoleModel.create(role);
  }
}
