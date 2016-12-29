import {Schema} from 'mongoose';
import {Counters} from '../../counters/counters';

export const categoriesSchema = new Schema({
  _id: Number,
  name: String
}).pre('save', function(next) {
  Counters.get('categories', this._doc, next);
});