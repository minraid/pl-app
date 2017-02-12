import {Schema} from 'mongoose';
import {Counters} from '../../counters/counters';

export const productsSchema = new Schema({
  _id: Number,
  title: String,
  description: String,
  image: String,
  brand: {
    title: String,
    image: String,
  },
  manufacturer: {
    title: String
  },
  category: {
    type: Number,
    ref: 'Category'
  },
  details: {
    form: String,
    activeSubstance: String,
    dosage: String,
    packaging: String,
    quantity: Number,
    pricePerPill: Number,
    category: String
  },
  promo: {
    photos: String,
    logos: String,
    leaflets: String,
    miniature: String,
    texts: String,
    other: String
  }
}).pre('save', function(next) {
  Counters.get('products', this._doc, next);
});
