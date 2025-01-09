# Uber Clone

## Documentation

### Backend

The backend folder contains all the server-side code for the Uber Clone project. It includes:

- **server.js**: The main entry point for the backend server.
- **config/**: Configuration files for the project.
- **controllers/**: Contains the logic for handling requests and responses.
- **models/**: Defines the data models used in the application.
- **routes/**: Defines the API endpoints and routes.
- **middlewares/**: Custom middleware functions for the application.
- **utils/**: Utility functions and helpers.

To run the backend server, navigate to the backend folder and use the following commands:

```bash
cd backend
npm install
npm start
```

Ensure you have all the necessary environment variables set up in a `.env` file in the backend folder. The `.env` file should include:

```
PORT=your_port_number
DB_URI=your_database_uri
JWT_SECRET=your_jwt_secret
```



