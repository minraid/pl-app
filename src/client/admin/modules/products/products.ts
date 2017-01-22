class ProductBrand {
  title: string;
  image: string;
}

class ProductManufacturer {
  title: string;
}

class ProductDetails {
  form: string;
  activeSubstance: string;
  dosage: string;
  packaging: string;
  quantity: number;
  pricePerPill: number;
  category: string
}

class ProductPromo {
  photos: string;
  logos: string;
  leaflets: string;
  miniature: string;
  texts: string;
  other: string
}

export class Product {
  _id: number;
  title: string;
  description: string;
  image: string;
  brand: ProductBrand = new ProductBrand();
  manufacturer: ProductManufacturer = new ProductManufacturer();
  category: number;
  details: ProductDetails = new ProductDetails();
  promo: ProductPromo = new ProductPromo();
}
