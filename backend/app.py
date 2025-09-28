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
        "name": "AbleSpace Pro",
        "company": "AbleSpace Inc",
        "category": "Software",
        "price": 499,
        "rating": 4.5,
        "image": "/images/tablet pro.jpeg",
        "description": "AbleSpace Pro helps teams manage projects efficiently with cloud collaboration.",
        "specifications": "Supports Windows/Mac, Cloud sync, 10GB storage, Multi-user access",
        "reviews": "Users: 250, Avg Rating: 4.5 ⭐"
    },
       {
        "id": 2,
        "name": "AblePen Tablet",
        "company": "AbleSpace Tech",
        "category": "Hardware",
        "price": 99,
        "rating": 4.3,
        "image": "/images/pen-tablet.jpeg",
        "description": "Digital drawing tablet with pressure sensitivity for artists.",
        "specifications": "Active area: 10x6 inches, Connectivity: USB, Pen included",
        "reviews": "Users: 45, Avg Rating: 4.3 ⭐"
    },
    {
        "id": 3,
        "name": "AbleDesk Chair",
        "company": "AbleSpace Furnitures",
        "category": "Hardware",
        "price": 149,
        "rating": 4.8,
        "image": "/images/chair.jpeg",
        "description": "Ergonomic office chair with lumbar support and adjustable height.",
        "specifications": "Material: Mesh, Adjustable height, Max weight: 120kg",
        "reviews": "Users: 80, Avg Rating: 4.8 ⭐"
    },
    {
        "id": 4,
        "name": "AbleDesk Monitor",
        "company": "AbleSpace Tech",
        "category": "Hardware",
        "price": 299,
        "rating": 4.6,
        "image": "/images/monitor.jpeg",
        "description": "27-inch full HD monitor with ultra-thin bezels for a sleek setup.",
        "specifications": "Resolution: 1920x1080, Refresh rate: 75Hz, HDMI & VGA ports",
        "reviews": "Users: 60, Avg Rating: 4.6 ⭐"
    },
     {
        "id": 5,
        "name": "AbleSpace Lite",
        "company": "AbleSpace Inc",
        "category": "Software",
        "price": 199,
        "rating": 4.0,
        "image": "/images/gaming-laptop.jpeg",
        "description": "Lightweight project management tool for small teams and freelancers.",
        "specifications": "Supports Windows/Mac, Cloud sync, 5GB storage, Single-user focus",
        "reviews": "Users: 120, Avg Rating: 4.0 ⭐"
    },

    {
        "id": 6,
        "name": "AbleSpace Cloud",
        "company": "AbleSpace Inc",
        "category": "Software",
        "price": 29,
        "rating": 4.2,
        "image": "/images/smartphone.jpeg",
        "description": "Secure cloud storage for individuals and small teams.",
        "specifications": "Storage: 100GB, End-to-end encryption, Multi-device support",
        "reviews": "Users: 500, Avg Rating: 4.2 ⭐"
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









