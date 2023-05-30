export interface Rating {
  rate: number;
  count: number;
}

export interface Product extends Rating {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
  rating?: Rating;
}
