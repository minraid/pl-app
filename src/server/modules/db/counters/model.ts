import * as mongoose from 'mongoose';
import {countersSchema} from './schema';
import {ICountersModel} from "../../counters/interfaces";

export const CountersModel = <ICountersModel>mongoose.model('Counter', countersSchema);