import * as bcrypt from 'bcrypt';
import {usersModel} from "../db/users/model";
import {User} from "../users/users";
import {IUserDocument} from "../users/interfaces";
import Session = Express.Session;

export interface IAuth {
  login(email: string, pass: string): Promise<boolean>;
  signup(data: IUserDocument): Promise<string>;
  checknick(nickname: string): Promise<boolean>;
  logout(session: Session): Promise<Object>;
  forgot(email: string): Promise<string>;
  [action: string]: any;
}

export class Auth {
  [method: string]: string;

  static login(email: string, pass: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      Auth.getUser().find({email}).then((users: IUserDocument[]) => {
        if (users && users.length) {
          const [{password}] = users;
          bcrypt.compare(pass, password).then(res => resolve(res));
        } else {
          return reject('User not found');
        }
      });
    })
  }

  static signUp(data: IUserDocument): Promise<string> {
    const {email} = data;
    const user = Auth.getUser();
    return new Promise((resolve, reject) => {
      user.find({email}).then(users => { // TODO: addUserRole
        if (!users.length) {
          user.create(data).then(password => {
            console.log(password); // TODO: send mail;
            resolve(password)
          })
        } else {
          reject('Email has been used');
        }
      })
    })
  }

  static checkNick(nickname: string): Promise<boolean> {
    return Auth.getUser().find({nickname}).then(([user]) => !Boolean(user));
  }

  static logout(session: Session): Promise<Object> {
    return new Promise((resolve, reject) => {
      session.destroy(err => {
        if (err) reject(err);
        resolve({code: 1});
      });
    });
  }

  static forgot(email: string): Promise<string> {
    return User.forgotPassword(email).then(password => {
      console.log(password); // TODO: send mail;
      return password;
    })
  }

  private static getUser(): User {
    return new User(usersModel);
  }
}