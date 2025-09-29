export interface Product {
  id: number;
  title: string;   // <- replace 'name' with 'title'
  author?: string; // if relevant
  company: string;
  category: string;
  price: number;
  rating: number;
  description: string;
  specifications: string;
  reviews: string;
  image: string;
}


