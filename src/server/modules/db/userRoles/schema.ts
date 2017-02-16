import {Schema} from 'mongoose';
import {Counters} from '../../counters/counters';

export const userRolesSchema = new Schema({
  _id: Number,
  title: String,
  type: String
}).pre('save', function(next) {
  Counters.get('userRoles', this._doc, next);
});
