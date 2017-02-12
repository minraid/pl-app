import * as bcrypt from 'bcrypt';
import { Query } from 'mongoose';
import { IUserDocument, IUserModel } from './interfaces';
import { usersModel } from '../db/users/model';
import { BaseRepository } from '../db/baseRepo';
import { DocumentQuery, Document } from 'mongoose';

export class User extends BaseRepository<IUserDocument> {
  private _usersModel: IUserModel;

  constructor(usersModel: IUserModel) {
    super(usersModel);
    this._usersModel = usersModel;
  }

  create(user: IUserDocument): Promise<IUserDocument> {
    return new Promise((resolve, reject) => {
      const pass = this._generatePassword(8);
      this._hashPassword(pass).then(password => {
        user.password = password;
        this._usersModel.create(user).then((data: IUserDocument) => resolve(pass), reject)
      });
    });
  }

  static search(params): DocumentQuery<IUserDocument[], Document> {
    const user = new User(usersModel);
    const searchParams: any = {};
    let sort = {};
    if (params.sort && params.order) {
      sort = {[params.sort]: params.order === 'ASC' ? 1 : -1};
    }
    return user.find(searchParams)
      .sort(sort);
  }

  static forgotPassword(email: string): Promise<string> {
    const user = new User(usersModel);
    return new Promise((resolve, reject) => {
      user.findOne({email}).then((data: IUserDocument) => {
        user._generateNewPassword(data).then((password: string) => resolve(password), reject);
      }, reject)
    });
  }

  static get(id: number): DocumentQuery<Document, Document>| DocumentQuery<Document[], Document> {
    const user = new User(usersModel);
    if (id) {
      return user.findById(id);
    }
    return user.retrieve();
  }

  static update(id: number, newCategory: IUserDocument): Query<IUserDocument> {
    const user = new User(usersModel);
    return user.update(id, newCategory);
  }

  static delete(id: number): Query<void> {
    const user = new User(usersModel);
    return user.delete(id);
  }

  private _generateNewPassword(user: IUserDocument): Promise<string> {
    return new Promise((resolve, reject) => {
      const pass = this._generatePassword(8);
      this._hashPassword(pass).then((password: string) => {
        this.update(user._id, {password}).then(() => resolve(pass), reject);
      }, reject);
    });
  }

  private _hashPassword(pass: string) {
    return bcrypt.hash(pass, 8);
  }

  private _getRandomSymbol(): string {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
    return alphabet[Math.floor((Math.random() * 62) + 0)];
  }

  private _generatePassword(length: number): string {
    let res = '';
    for (let i = 0; i < length; i++) {
      res += this._getRandomSymbol();
    }
    return res;
  }
}
