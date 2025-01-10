# Uber Clone Backend

This is the backend for the Uber clone project. It includes user registration and login functionalities.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/uber-clone.git
   cd uber-clone/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   DB_CONNECT=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   PORT=3000
   ```

4. Start the server:
   ```sh
   npm start
   ```

## API Endpoints

### User Registration Endpoint

#### Endpoint: `/users/register`

#### Method: POST

#### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: The user's first name (required, minimum 3 characters).
  - `lastname`: The user's last name (required, minimum 2 characters).
- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 8 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

#### Responses

##### Success
- **Status Code: 201 Created**
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    },
    "token": "jwt_token"
  }
  ```

##### Validation Errors
- **Status Code: 400 Bad Request**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

##### Server Errors
- **Status Code: 500 Internal Server Error**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### User Login Endpoint

#### Endpoint: `/users/login`

#### Method: POST

#### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email`: The user's email address (required, must be a valid email).
- `password`: The user's password (required, minimum 8 characters).

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "Password123"
}
```

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "user": {
      "_id": "user_id",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    },
    "token": "jwt_token"
  }
  ```

##### Validation Errors
- **Status Code: 400 Bad Request**
- **Body:**
  ```json
  {
    "errors": [
      {
        "msg": "Error message",
        "param": "field_name",
        "location": "body"
      }
    ]
  }
  ```

##### Authentication Errors
- **Status Code: 401 Unauthorized**
- **Body:**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

##### Server Errors
- **Status Code: 500 Internal Server Error**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

## Project Structure

```
backend/
├── controllers/
│   └── user.controller.js
├── db/
│   └── db.js
├── models/
│   └── user.model.js
├── routes/
│   └── user.routes.js
├── services/
│   └── user.service.js
├── .env
├── app.js
├── server.js
└── README.md
```

## How to Use

1. Register a new user by sending a POST request to `/users/register` with the required fields.
2. Log in with an existing user by sending a POST request to `/users/login` with the email and password.
3. Use the returned JWT token for authenticated requests.
