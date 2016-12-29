import {IUserDocument, IUserModel} from './interfaces';
import {usersModel} from '../db/users/model';
import * as bcrypt from 'bcrypt';
import {BaseRepository} from '../db/baseRepo';

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

  static forgotPassword(email: string): Promise<string> {
    const user = new User(usersModel);
    return new Promise((resolve, reject) => {
      user.findOne({email}).then((data: IUserDocument) => {
        user._generateNewPassword(data).then((password: string) => resolve(password), reject);
      }, reject)
    });
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