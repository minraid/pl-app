import * as bcrypt from 'bcrypt';
import { usersModel } from "../db/users/model";
import { User } from "../users/users";
import { IUserDocument } from "../users/interfaces";
import Session = Express.Session;
import { UserRole } from "../userRoles/userRole";

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
      Auth.getUser().find({email})
        .populate('role')
        .then((users: IUserDocument[]) => {
          if (users && users.length) {
            const [{password, _id, role}] = users;
            bcrypt.compare(pass, password)
              .then(res => resolve({_id, role}));
          } else {
            return reject('User not found');
          }
        });
    })
  }

  static signUp(data: IUserDocument): Promise<string> {
    const {email} = data;
    console.log(email);
    const user = Auth.getUser();
    return new Promise((resolve, reject) => {
      user.find({email}).then(users => {
        if (!users.length) {
          UserRole.get('CUSTOMER').then(role => {
            data.role = data.role ? data.role : role;
            user.create(data).then(password => {
              console.log(password); // TODO: send mail;
              resolve(password)
            }, reject)
          })
        } else {
          reject('Email has been used');
        }
      }, reject)
    })
  }

  static adminSignUp(data: IUserDocument): Promise<string> {
    return new Promise((resolve, reject) => {
      UserRole.get('ADMIN').then(role => {
        data.role = role;
        Auth.signUp(data).then(resolve, reject);
      });
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
    return User.forgotPassword(email);
  }

  private static getUser(): User {
    return new User(usersModel);
  }
}
