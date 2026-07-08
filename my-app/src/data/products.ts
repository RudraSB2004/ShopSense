import type { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro",
    description: "Latest Apple flagship smartphone",
    category: "Electronics",
    brand: "Apple",
    price: 129999,
    discount: 10,
    rating: 4.8,
    stock: 12,
    image: "/products/iphone15pro.jpg",
    tags: ["phone", "apple", "ios"]
  },
  {
    id: "2",
    name: "Samsung S24 Ultra",
    description: "Premium Android smartphone",
    category: "Electronics",
    brand: "Samsung",
    price: 119999,
    discount: 8,
    rating: 4.7,
    stock: 20,
    image: "/products/SamsungS24.webp",
    tags: ["android", "phone"]
  },
  {
    id: "3",
    name: "Sony WH-1000XM5",
    description: "Noise cancelling headphones",
    category: "Audio",
    brand: "Sony",
    price: 28999,
    discount: 15,
    rating: 4.9,
    stock: 18,
    image: "/products/Sony WH-1000XM5.jpg",
    tags: ["headphones", "audio"]
  }
];