
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  images: string[];
  rating: number;
  stock: number;
  isNew?: boolean;
  discountPercentage: number;
  features?: string[];
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

export interface Category {
  id: number;
  name: string;
  image: string;
  productCount: number;
}
