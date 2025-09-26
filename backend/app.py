from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # enable cross-origin requests


products = [
    {
        "id": 1,
        "name": "iPhone 15",
        "company": "Apple",
        "category": "Smartphone",
        "price": 1200,
        "rating": 4.8,
        "image": "https://example.com/iphone15.jpg"
    },
    {
        "id": 2,
        "name": "Galaxy S23",
        "company": "Samsung",
        "category": "Smartphone",
        "price": 1100,
        "rating": 4.7,
        "image": "https://example.com/galaxyS23.jpg"
    },
    {
        "id": 3,
        "name": "MacBook Pro 16",
        "company": "Apple",
        "category": "Laptop",
        "price": 2500,
        "rating": 4.9,
        "image": "https://example.com/macbookpro16.jpg"
    },
    {
        "id": 4,
        "name": "Surface Laptop 5",
        "company": "Microsoft",
        "category": "Laptop",
        "price": 2200,
        "rating": 4.6,
        "image": "https://example.com/surfacelaptop5.jpg"
    },
    {
        "id": 5,
        "name": "AirPods Pro",
        "company": "Apple",
        "category": "Accessories",
        "price": 250,
        "rating": 4.7,
        "image": "https://example.com/airpodspro.jpg"
    },
    {
        "id": 6,
        "name": "Galaxy Buds 3",
        "company": "Samsung",
        "category": "Accessories",
        "price": 200,
        "rating": 4.5,
        "image": "https://example.com/galaxybuds3.jpg"
    }
]

@app.route("/")
def home():
    return "AbleSpace Backend Running. Use /api/products to see data."

@app.route("/api/products", methods=["GET"])
def get_products():
    return jsonify(products)

if __name__ == "__main__":
    app.run(debug=True)






