import {Document, Model} from 'mongoose';

interface IUserRole {
  title: string;
  type: string;
}

interface IUserContacts {
  phone: number;
  skype: string;
  icq: string;
  jabber: string;
}

interface IUserFinances {
  deposit: number;
  credit: number;
  loanBalance: number;
  creditLine: boolean;
  loanStart: Date;
}

export interface IUserDocument extends Document {
  _id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
  birthDate: Date;
  role: IUserRole;
  country: string;
  contacts: IUserContacts;
  finances: IUserFinances;
  registerDate: Date;
}

export interface IUserModel extends Model<IUserDocument> {}
