
import { Product, Category } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "A timeless classic white t-shirt made from premium cotton for everyday comfort and style.",
    price: 29.99,
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.5,
    stock: 100,
    isNew: true,
    discountPercentage: 0,
    features: ["100% Cotton", "Regular fit", "Machine washable"],
    colors: ["White", "Black", "Gray"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Modern slim fit jeans that offer both style and comfort for any occasion.",
    price: 59.99,
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.3,
    stock: 75,
    discountPercentage: 15,
    features: ["98% Cotton, 2% Elastane", "Slim fit", "5 pocket design"],
    colors: ["Blue", "Black", "Dark Blue"],
    sizes: ["30", "32", "34", "36"]
  },
  {
    id: 3,
    name: "Classic Leather Sneakers",
    description: "Versatile leather sneakers that combine timeless style with all-day comfort.",
    price: 89.99,
    category: "Shoes",
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.8,
    stock: 50,
    isNew: true,
    discountPercentage: 0,
    features: ["Genuine leather upper", "Rubber outsole", "Cushioned insole"],
    colors: ["White", "Black", "Brown"],
    sizes: ["7", "8", "9", "10", "11"]
  },
  {
    id: 4,
    name: "Leather Crossbody Bag",
    description: "Elegant and practical crossbody bag made from genuine leather with multiple compartments.",
    price: 119.99,
    category: "Accessories",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.6,
    stock: 30,
    discountPercentage: 0,
    features: ["Genuine leather", "Adjustable strap", "Multiple compartments"],
    colors: ["Black", "Brown", "Tan"]
  },
  {
    id: 5,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation and long battery life.",
    price: 199.99,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.9,
    stock: 25,
    isNew: true,
    discountPercentage: 10,
    features: ["Active noise cancellation", "30-hour battery life", "Built-in microphone"]
  },
  {
    id: 6,
    name: "Winter Parka Jacket",
    description: "Warm and stylish winter jacket with water-resistant exterior and cozy lining.",
    price: 179.99,
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.7,
    stock: 40,
    discountPercentage: 20,
    features: ["Water-resistant exterior", "Insulated lining", "Multiple pockets"],
    colors: ["Black", "Navy", "Green"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 7,
    name: "Smart Watch",
    description: "Advanced smartwatch with health tracking features, notifications, and customizable watch faces.",
    price: 249.99,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.5,
    stock: 35,
    isNew: true,
    discountPercentage: 0,
    features: ["Heart rate monitoring", "GPS", "Water resistant", "5-day battery life"],
    colors: ["Black", "Silver", "Rose Gold"]
  },
  {
    id: 8,
    name: "Dress Shirt",
    description: "Formal dress shirt perfect for business and special occasions, made from wrinkle-resistant fabric.",
    price: 49.99,
    category: "Clothing",
    images: [
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    ],
    rating: 4.2,
    stock: 60,
    discountPercentage: 0,
    features: ["Wrinkle-resistant", "Regular fit", "Button-down collar"],
    colors: ["White", "Light Blue", "Pink", "Black"],
    sizes: ["S", "M", "L", "XL"]
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Clothing",
    image: "https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    productCount: 120
  },
  {
    id: 2,
    name: "Shoes",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    productCount: 64
  },
  {
    id: 3,
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    productCount: 85
  },
  {
    id: 4,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3", 
    productCount: 42
  }
];
