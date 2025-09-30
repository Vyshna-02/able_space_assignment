# Product Data Explorer — Full-Stack

A production-minded product exploration platform built with **Next.js (React + TypeScript)** for the frontend and **NestJS / Node.js** for the backend. It lets users navigate from **headings → categories → products → product detail pages** powered by live scraping from [World of Books](https://www.worldofbooks.com/).

---

## 🚀 Features

- **Frontend (Next.js + TypeScript + Tailwind CSS)**
  - Home page with navigation headings
  - Category drilldown pages
  - Product grid / listing pages
  - Product detail pages with description, price, author, reviews, and ratings
  - Responsive design (mobile & desktop)
  - Add to Cart functionality using React Context
  - Skeleton/loading states
  - Smooth navigation transitions

- **Backend (NestJS / Node.js)**
  - RESTful API endpoints:
    - `GET /products` — All products
    - `GET /products/:id` — Product detail
    - `GET /category/:slug` — Products by category
  - CORS enabled for frontend
  - Safe caching and deduplication for scraped data

- **Scraping**
  - On-demand scraping from World of Books
  - Stores headings, categories, products, and product details
  - Deduplication and caching implemented

- **Cart Management**
  - Add/remove items
  - Persistent state using React Context

---

## 📂 Project Structure

able_space_assignment/
├─ backend-next/
│ ├─ src/
│ │ ├─ main.ts
│ │ └─ products/
│ └─ package.json
├─ frontend-next/
│ ├─ src/
│ │ ├─ app/
│ │ │ ├─ layout.tsx
│ │ │ ├─ products/
│ │ │ │ └─ [id]/page.tsx
│ │ │ └─ catagory/
│ │ │ └─ [slug]/page.tsx
│ │ ├─ components/
│ │ │ ├─ Navbar.tsx
│ │ │ ├─ ProductCard.tsx
│ │ │ └─ ProductList.tsx
│ │ └─ context/
│ │ └─ CartContext.tsx
│ └─ package.json
├─ README.md
└─ .gitignore


---

## ⚙️ Installation

### Backend

1. Navigate to backend folder:
   ```bash
   cd backend-next
Install dependencies:

npm install


Start server:

npm run start


API runs at: http://localhost:5000

Frontend

Navigate to frontend folder:

cd frontend-next


Install dependencies:

npm install


Start development server:

npm run dev


Access at: http://localhost:3000

📡 API Endpoints

GET /products — Returns all products

GET /products/:id — Returns product details by ID

GET /category/:slug — Returns products by category slug

Example: GET http://localhost:5000/category/childrens-books

🛠 Technology Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS

Backend: NestJS / Node.js (or Express if backend is simple)

Database: PostgreSQL / MongoDB (optional for scraping storage)

Scraping: Crawlee + Playwright (or equivalent)

State Management: React Context API (Cart)

✅ How to Use

Open the frontend in the browser (http://localhost:3000)

Navigate headings → categories → products → product details

Add products to the cart

Use the navbar to view cart or return home

🔒 Security & Best Practices

CORS enabled for frontend

Input validation on backend

Deduplication & caching for scraping

Proper error handling in React components

📝 Notes

Responsive and accessible (WCAG AA basics)

Skeleton/loading states implemented

Live scraping optional if backend cache exists

📄 Submission

GitHub Repo: https://github.com/Vyshna-02/able_space_assignment

Deployed Frontend URL: Add your deployment URL here
https://able-space-assignment.onrender.com
