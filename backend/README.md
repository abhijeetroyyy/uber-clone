# Uber Clone Backend

This is the backend for the Uber clone project. It includes user and captain registration, login, and logout functionalities.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/abhijeetroyyy/uber-clone.git
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
  - `lastname`: The user's last name (required, minimum 3 characters).
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

##### Server Errors
- **Status Code: 500 Internal Server Error**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Captain Registration Endpoint

#### Endpoint: `/captains/register`

#### Method: POST

#### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and vehicle details.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: The captain's first name (required, minimum 2 characters).
  - `lastname`: The captain's last name (required, minimum 2 characters).
- `email`: The captain's email address (required, must be a valid email).
- `password`: The captain's password (required, minimum 8 characters).
- `vehicle`: An object containing:
  - `color`: The vehicle's color (required, minimum 3 characters).
  - `plate`: The vehicle's plate number (required, minimum 3 characters).
  - `capacity`: The vehicle's capacity (required, minimum 1).
  - `VehicleType`: The type of vehicle (required, must be either car, bike, or auto).

Example:
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "Password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "VehicleType": "car"
  }
}
```

#### Responses

##### Success
- **Status Code: 201 Created**
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "VehicleType": "car"
      }
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

### Captain Login Endpoint

#### Endpoint: `/captains/login`

#### Method: POST

#### Description
This endpoint is used to log in an existing captain. It requires the captain's email and password.

#### Request Body
The request body should be a JSON object containing the following fields:

- `email`: The captain's email address (required, must be a valid email).
- `password`: The captain's password (required, minimum 8 characters).

Example:
```json
{
  "email": "jane.doe@example.com",
  "password": "Password123"
}
```

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "VehicleType": "car"
      }
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

### Captain Profile Endpoint

#### Endpoint: `/captains/profile`

#### Method: GET

#### Description
This endpoint is used to get the profile of the authenticated captain. It requires a valid JWT token.

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "captain": {
      "_id": "captain_id",
      "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
      },
      "email": "jane.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "VehicleType": "car"
      }
    }
  }
  ```

##### Authentication Errors
- **Status Code: 401 Unauthorized**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
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

### Captain Logout Endpoint

#### Endpoint: `/captains/logout`

#### Method: POST

#### Description
This endpoint is used to log out the authenticated captain. It requires a valid JWT token.

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "message": "Logout successful"
  }
  ```

##### Authentication Errors
- **Status Code: 401 Unauthorized**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
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

### User Profile Endpoint

#### Endpoint: `/users/profile`

#### Method: GET

#### Description
This endpoint is used to get the profile of the authenticated user. It requires a valid JWT token.

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```

##### Authentication Errors
- **Status Code: 401 Unauthorized**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
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

### User Logout Endpoint

#### Endpoint: `/users/logout`

#### Method: GET

#### Description
This endpoint is used to log out the authenticated user. It requires a valid JWT token.

#### Responses

##### Success
- **Status Code: 200 OK**
- **Body:**
  ```json
  {
    "message": "Logged out successfully"
  }
  ```

##### Authentication Errors
- **Status Code: 401 Unauthorized**
- **Body:**
  ```json
  {
    "message": "Unauthorized"
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
│   ├── user.controller.js
│   └── captain.controller.js
├── db/
│   └── db.js
├── middleware/
│   └── auth.middleware.js
├── models/
│   ├── user.model.js
│   └── captain.model.js
│   └── blacklistToken.model.js
├── routes/
│   ├── user.routes.js
│   └── captain.routes.js
├── services/
│   ├── user.service.js
│   └── captain.service.js
├── .env
├── app.js
├── server.js
└── README.md
```

## How to Use

1. Register a new user by sending a POST request to `/users/register` with the required fields.
2. Register a new captain by sending a POST request to `/captains/register` with the required fields.
3. Log in with an existing user by sending a POST request to `/users/login` with the email and password.
4. Log in with an existing captain by sending a POST request to `/captains/login` with the email and password.
5. Use the returned JWT token for authenticated requests.
6. Get the user profile by sending a GET request to `/users/profile` with the JWT token.
7. Get the captain profile by sending a GET request to `/captains/profile` with the JWT token.
8. Log out the user by sending a GET request to `/users/logout` with the JWT token.
9. Log out the captain by sending a POST request to `/captains/logout` with the JWT token.
