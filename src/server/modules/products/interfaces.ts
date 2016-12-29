import {Model, Document} from 'mongoose';

interface IBrand {
  title: string;
  image: string;
}

interface IManufacturer {
  title: string;
}

interface IDetails {
  form: string;
  activeSubstance: string;
  dosage: string;
  packaging: string;
  quantity: number;
  pricePerPill: number;
  type: string;
}

interface IPromo {
  photos: string;
  logos: string;
  leaflets: string;
  miniature: string;
  texts: string;
  other: string;
}

export interface IProductDocument extends Document {
  _id: number;
  title: string;
  description: string;
  image: string;
  brand: IBrand;
  manufacturer: IManufacturer;
  category: number;
  details: IDetails;
  promo: IPromo;
}

export interface IProductModel extends Model<IProductDocument> {}