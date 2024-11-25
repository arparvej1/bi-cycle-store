# Bicycle Store API

## Description

The Bicycle Store API is a RESTful web service built with **Node.js**, **Express**, and **MongoDB** using **Mongoose** as the ODM (Object Document Mapping). This API allows users to manage bicycle products, place orders, and track revenue from all orders. It handles CRUD operations for bicycles and orders while ensuring data integrity and business logic through schema validation and inventory management.

---

## Features

- **Manage Bicycles**: Create, retrieve, update, and delete bicycle products.
- **Place Orders**: Order bicycles, reduce inventory, and track customer orders.
- **Inventory Management**: Automatically update stock levels and availability upon placing an order.
- **Revenue Calculation**: Calculate total revenue from all placed orders.
- **Mongoose Schema Validation**: Ensure data integrity with proper validation for bicycle properties and order details.
- **Search Functionality**: Search for bicycles based on name, brand, or type.

---

## Table of Contents

1. [Technologies](#technologies)
2. [Installation](#installation)
3. [Error Handling](#error-handling)
4. [Testing](#testing)

---

## Technologies

- **Node.js** - JavaScript runtime for building the backend server.
- **Express.js** - Web framework for handling HTTP requests and routing.
- **MongoDB** - NoSQL database to store bicycle products and orders.
- **Mongoose** - ODM (Object Document Mapper) to interact with MongoDB.
- **TypeScript** - Superset of JavaScript for type safety and better development experience.

---

## Installation

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/arparvej1/bicycle-store-api.git
cd bicycle-store-api
```

### 2. Install Dependencies

Install the necessary dependencies using npm or yarn:

```bash
npm install
```
or
```bash
yarn install
```

### 3. Set Up MongoDB

Make sure you have **MongoDB** running locally or set up a **MongoDB Atlas** cloud database. Update the `MONGO_URI` environment variable in the `.env` file to match your MongoDB URI:

```env
MONGO_URI=mongodb://localhost:27017/bicycle-store
PORT=3000
```

### 4. Run the Server

Start the Express server:

```bash
npm start
```

or for development:

```bash
npm run dev
```

The server will start at `http://localhost:3000`.

---

## Error Handling

The API returns structured error responses in case of issues, such as validation errors, resource not found, or insufficient stock. Example:

```json
{
  "message": "Validation failed",
  "success": false,
  "error": {
    "name": "ValidationError",
    "errors": {
      "price": {
        "message": "Price must be a positive value",
        "name": "ValidatorError",
        "properties": {
          "message": "Price must be a positive value",
          "type": "min",
          "min": 0
        },
        "kind": "min",
        "path": "price",
        "value": -5
      }
    }
  },
  "stack": "Error: Something went wrong\n    at app.js:23:13\n    at..."
}
```

---

## Testing

You can test the API using tools like **Postman** or **Insomnia** by making requests to the appropriate endpoints.


---

### Author

Abdur Razzak Parvej 
[GitHub Profile](https://github.com/arparvej1)
