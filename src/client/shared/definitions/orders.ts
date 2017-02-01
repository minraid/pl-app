import { Product } from "./products";
import { User } from "./users";

export class Address {
  country: string;
  city: string;
  zip: number;
  address: string;
}

export class Customer {
  firstName: string;
  lastName: string;
  phone: string;
}

export class ShippingReturn {
  active: boolean;
  cost: number;
  date: Date;
}

export class Overweight {
  active: boolean;
  cost: number;
}

export class Order {
  _id: number;
  date: Date = new Date();
  address: Address = new Address();
  customer: Customer = new Customer();
  products: Product[] = [new Product()];
  expressDelivery: boolean = false;
  deliveryCost: number;
  shipmentDate: Date = new Date();
  shippingCompany: string;
  tracking: string;
  shippingReturn: ShippingReturn = new ShippingReturn();
  status: string;
  overweight: Overweight = new Overweight();
  repeat: boolean;
  user: User; //TODO = new User()
  amount: number;
}
