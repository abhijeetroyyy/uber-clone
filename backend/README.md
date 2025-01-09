# User Registration Endpoint

## Endpoint: `/users/register`

### Method: POST

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
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
  "password": "password123"
}
```

### Responses

#### Success
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

#### Validation Errors
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

#### Server Errors
- **Status Code: 500 Internal Server Error**
- **Body:**
  ```json
  {
    "error": "Internal Server Error"
  }
  ```

### Notes
- The password is hashed before being stored in the database.
- A JWT token is generated and returned upon successful registration.
