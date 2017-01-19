export interface IUserRole {
  title: string;
  role: string;
}

export interface IUserContacts {
  phone: number;
  skype: string;
  icq: string;
  jabber: string;
}

export interface IUserFinances {
  deposit: number;
  credit: number;
  loanBalance: number;
  creditLine: boolean;
  loanStart: Date;
}

export interface IUser {
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
