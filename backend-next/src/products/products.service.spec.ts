import { Injectable } from '@nestjs/common';

export interface Product {
  id: number;
  title: string;
  author: string;
  company: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  specifications: string;
  reviews: string;
  image: string;
}

@Injectable()
export class ProductsService {
  private products: Product[] = [
    // Paste your 10 book objects here from products.ts
  ];

  findAll(): Product[] {
    return this.products;
  }

  findOne(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
