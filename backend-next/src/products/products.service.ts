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
    {
      id: 1,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      company: "Scribner",
      category: "Classic Literature",
      price: 10.99,
      rating: 4.7,
      description: "A novel set in the Jazz Age, exploring themes of wealth, love, and the American Dream.",
      specifications: "Paperback, 180 pages, English",
      reviews: "Excellent storytelling and character development.",
      image: "/images/gatsby.jpeg"
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      company: "Secker & Warburg",
      category: "Dystopian Fiction",
      price: 9.99,
      rating: 4.8,
      description: "A chilling vision of a totalitarian future society ruled by Big Brother.",
      specifications: "Paperback, 328 pages, English",
      reviews: "Profoundly thought-provoking and still relevant.",
      image: "/images/1984.png"
    },
    {
      id: 3,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      company: "J.B. Lippincott & Co.",
      category: "Classic Literature",
      price: 12.5,
      rating: 4.9,
      description: "A story of racial injustice and childhood innocence in the Deep South.",
      specifications: "Paperback, 281 pages, English",
      reviews: "Powerful and emotional, a must-read.",
      image: "/images/bird.jpeg"
    },
    {
      id: 4,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      company: "T. Egerton",
      category: "Romance",
      price: 8.99,
      rating: 4.6,
      description: "A classic novel about manners, marriage, and misunderstandings.",
      specifications: "Paperback, 279 pages, English",
      reviews: "Charming, witty, and timeless.",
      image: "/images/pride.jpeg"
    },
    {
      id: 5,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      company: "George Allen & Unwin",
      category: "Fantasy",
      price: 11.99,
      rating: 4.8,
      description: "Bilbo Baggins embarks on an epic adventure in Middle-earth.",
      specifications: "Paperback, 310 pages, English",
      reviews: "A perfect start to the fantasy world of Tolkien.",
      image: "/images/hobbit.jpeg"
    },
    {
      id: 6,
      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      company: "Bloomsbury",
      category: "Fantasy",
      price: 10.5,
      rating: 4.9,
      description: "The beginning of Harry Potter's journey at Hogwarts.",
      specifications: "Paperback, 223 pages, English",
      reviews: "Magical and captivating.",
      image: "/images/harry-potter.jpeg"
    },
    {
      id: 7,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      company: "Little, Brown and Company",
      category: "Fiction",
      price: 9.5,
      rating: 4.4,
      description: "A story of teenage rebellion and alienation.",
      specifications: "Paperback, 214 pages, English",
      reviews: "Classic coming-of-age story.",
      image: "/images/catcher.jpeg"
    },
    {
      id: 8,
      title: "Moby-Dick",
      author: "Herman Melville",
      company: "Harper & Brothers",
      category: "Adventure",
      price: 12.99,
      rating: 4.3,
      description: "Captain Ahab's obsessive quest for the white whale.",
      specifications: "Paperback, 585 pages, English",
      reviews: "Dense but rewarding.",
      image: "/images/moby.jpeg"
    },
    {
      id: 9,
      title: "War and Peace",
      author: "Leo Tolstoy",
      company: "The Russian Messenger",
      category: "Historical Fiction",
      price: 14.5,
      rating: 4.6,
      description: "Epic tale of Russian society during Napoleonic Wars.",
      specifications: "Paperback, 1225 pages, English",
      reviews: "A monumental work of literature.",
      image: "/images/war.jpeg"
    },
    {
      id: 10,
      title: "The Alchemist",
      author: "Paulo Coelho",
      company: "HarperTorch",
      category: "Fiction",
      price: 8.5,
      rating: 4.7,
      description: "A philosophical story about following your dreams.",
      specifications: "Paperback, 197 pages, English",
      reviews: "Inspiring and easy to read.",
      image: "/images/alchemist.jpeg"
    }
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((p) => p.id === id);
  }

  findRecommended(id: number) {
    return this.products.filter((p) => p.id !== id).slice(0, 4);
  }
}



