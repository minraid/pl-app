export interface IProduct {
  _id: number,
  title: string,
  description: string,
  image: string,
  brand: {
    title: string,
    image: string,
  },
  manufacturer: {
    title: string
  },
  category: number,
  details: {
    form: string,
    activeSubstance: string,
    dosage: string,
    packaging: string,
    quantity: number,
    pricePerPill: number,
    type: string
  },
  promo: {
    photos: string,
    logos: string,
    leaflets: string,
    miniature: string,
    texts: string,
    other: string
  }
}
