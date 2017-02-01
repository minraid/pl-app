export class UserRole {
  title: string;
  role: string;
}

export class UserContacts {
  phone: number;
  skype: string;
  icq: string;
  jabber: string;
}

export class UserFinances {
  deposit: number;
  credit: number;
  loanBalance: number;
  creditLine: boolean;
  loanStart: Date;
}

export class User {
  _id: number;
  firstName: string;
  lastName: string;
  nickname: string;
  email: string;
  password: string;
  birthDate: Date;
  // role: UserRole = new UserRole();
  country: string;
  contacts: UserContacts = new UserContacts();
  finances: UserFinances = new UserFinances();
  registerDate: Date;
}
