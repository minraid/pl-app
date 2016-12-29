import {Schema} from 'mongoose';

export const countersSchema = new Schema({
  _id: {
    type: String,
    required: true
  },
  seq: {
    type: Number,
    default: 10000
  }
});

countersSchema.statics.getSequence = function (id: String) {
  return this.findByIdAndUpdate(id, {$inc: {seq: 1}}, {new: true});
};