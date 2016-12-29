import {Schema} from 'mongoose';
import {Counters} from '../../counters/counters';

export const usersSchema = new Schema({
  _id: Number,
  firstName: String,
  lastName: String,
  nickname: String,
  email: String,
  password: String,
  birthDate: Date,
  role: {
    type: Number,
    ref: 'userRolesSchema'
  },
  country: String,
  contacts: {
    phone: Number,
    skype: String,
    icq: String,
    jabber: String
  },
  finances: {
    deposit: {
      type: Number,
      default: 0
    },
    credit: {
      type: Number,
      default: 0
    },
    loanBalance: {
      type: Number,
      default: 0
    },
    creditLine: Boolean,
    loanStart: Date,
  },
  registerDate: {
    type: Date,
    default: Date.now
  }
}).pre('save', function(next) {
  Counters.get('users', this._doc, next);
});