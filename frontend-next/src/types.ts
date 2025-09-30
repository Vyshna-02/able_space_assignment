export interface Product {
  id: number;
  title: string;
  author: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating?: number; 
}


export interface Heading {
  id: number;
  title: string;
  slug: string;
}
