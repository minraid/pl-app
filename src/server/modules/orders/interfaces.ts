import {Model, Document} from 'mongoose';
import {IProductDocument} from '../products/interfaces';
import {IUserDocument} from '../users/interfaces';

interface IAddress {
  country: string;
  city: string;
  zip: Number;
  address: string;
}

interface ICustomer {
  firstName: string;
  lastName: string;
  phone: string;
}

interface IShippingReturn {
  active: boolean;
  cost: number;
  date: Date;
}

interface IOverweight {
  active: boolean;
  cost: number;
}

interface IProduct extends IProductDocument {
  amount: number;
}

export interface IOrderDocument extends Document {
  _id: Number;
  date: Date;
  address: IAddress;
  customer: ICustomer;
  products: IProduct[];
  expressDelivery: boolean;
  deliveryCost: number;
  shipmentDate: Date;
  shippingCompany: string;
  tracking: string;
  shippingReturn: IShippingReturn;
  status: string;
  overweight: IOverweight;
  repeat: boolean;
  user: IUserDocument;
}

export interface IOrderModel extends Model<IOrderDocument> {}