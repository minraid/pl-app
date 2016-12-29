import {Schema} from 'mongoose';
import {Counters} from '../../counters/counters';

export const ordersSchema = new Schema({
  _id: Number,
  date: {
    type: Date,
    default: Date.now
  },
  address: {
    country: String,
    city: String,
    zip: Number,
    address: String,
  },
  customer: {
    firstName: String,
    lastName: String,
    phone: String,
  },
  products: [{
    type: Number,
    ref: 'productsSchema',
    amount: Number
  }],
  expressDelivery: Boolean,
  deliveryCost: Number,
  shipmentDate: Date,
  shippingCompany: {
    type: String,
    default: ''
  },
  tracking: {
    type: String,
    default: ''
  },
  shippingReturn: {
    active: {
      type: Boolean,
      default: false
    },
    cost: {
      type: Number,
      default: 0
    },
    date: Date
  },
  status: String,
  overweight: {
    active: Boolean,
    cost: {
      type: Number,
      default: 0
    }
  },
  repeat: Boolean,
  user: {
    type: Number,
    ref: 'user'
  }
}).pre('save', function (next) {
  Counters.get('orders', this._doc, next);
});