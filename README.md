# Shop CRUD - Requirement A
## Run locally
Go to the backend folder and install dependencies:
```bash
cd backend
npm install
node app.js
Then open in a browser: http://localhost:3000/

The frontend allows full CRUD for products: adding, editing, deleting, and viewing the list.

API Endpoints
Method	Endpoint	Description
GET	/products	Get all products
GET	/products/:id	Get a product by ID
POST	/products	Add a new product
PUT	/products/:id	Update a product
DELETE	/products/:id	Delete a product
Field validation

name (TEXT) - required

price (REAL) - required

quantity (INTEGER) - required

category (TEXT) - optional

HTTP codes

200 OK - operation successful (GET, PUT, DELETE)

201 Created - new product created (POST)

400 Bad Request - missing required fields or invalid data type

404 Not Found - product not found by ID

Entity: Product
Field	Type	Description
id	INTEGER	Primary key, auto-increment
name	TEXT	Product name
price	REAL	Product price
quantity	INTEGER	Product quantity
category	TEXT	Product category (optional)
UI Screenshot

Git / Repository

Each entity is in a separate module: backend/modules/products

Branch: feature/products-crud

Pull request to main should include implemented features, instructions to run locally, and the UI screenshot