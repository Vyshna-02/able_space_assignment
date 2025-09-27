import os
from flask import Flask, jsonify, send_from_directory
from flask_cors import CORS

# Point Flask to frontend build folder
app = Flask(__name__, static_folder="../frontend/build", static_url_path="/")
CORS(app)

# API endpoint for products
@app.route("/api/products")
def get_products():
    products = [
    {
        "id": 1,
        "name": "Wireless Earbuds",
        "company": "Nothing",
        "category": "Audio",
        "price": 99,
        "rating": 4.5,
        "image": "/images/cmf-earbuds.jpg"
    },
    {
        "id": 2,
        "name": "Smartwatch Series 6",
        "company": "Apple",
        "category": "Wearables",
        "price": 399,
        "rating": 4.8,
        "image": "/images/apple-smartwatch.jpeg"
    },
    {
        "id": 3,
        "name": "Noise Cancelling Headphones",
        "company": "Sony",
        "category": "Audio",
        "price": 299,
        "rating": 4.6,
        "image": "/images/Headphones.jpg"
    },
    {
        "id": 4,
        "name": "Gaming Laptop",
        "company": "Dell",
        "category": "Computers",
        "price": 1200,
        "rating": 4.7,
        "image": "/images/gaming-laptop.jpeg"
    },
    {
        "id": 5,
        "name": "Smartphone X",
        "company": "Samsung",
        "category": "Mobile",
        "price": 899,
        "rating": 4.6,
        "image": "/images/smartphone.jpeg"
    },
    {
        "id": 6,
        "name": "Tablet Pro",
        "company": "Apple",
        "category": "Tablet",
        "price": 699,
        "rating": 4.7,
        "image": "/images/tablet pro.jpeg"
    }
]

    return jsonify(products)

# Serve React frontend
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, "index.html")

if __name__ == "__main__":
    app.run(debug=True)









