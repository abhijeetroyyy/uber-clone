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

### Frontend

The frontend folder contains all the client-side code for the Uber Clone project. It includes:

- **src/**: Contains the main source code for the React application.
- **public/**: Public assets and the main HTML file.
- **components/**: Reusable React components.
- **pages/**: React components representing different pages.
- **services/**: API service functions to interact with the backend.

To run the frontend application, navigate to the frontend folder and use the following commands:

```bash
cd frontend
npm install
npm start
```

Ensure you have all the necessary environment variables set up in a `.env` file in the frontend folder. The `.env` file should include:

```
REACT_APP_API_URL=your_backend_api_url
```

### Project Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/abhijeetroyyy/uber-clone.git
    cd uber-clone
    ```

2. Install dependencies for both backend and frontend:
    ```bash
    cd backend
    npm install
    cd ../frontend
    npm install
    ```

3. Set up environment variables for both backend and frontend as described above.

4. Run the backend and frontend servers:
    ```bash
    # In one terminal
    cd backend
    npm start

    # In another terminal
    cd frontend
    npm start
    ```

### Dependencies

#### Backend

- Express
- Mongoose
- JWT
- dotenv
- bcryptjs

#### Frontend

- React
- Axios
- React Router
- Redux

### Folder Structure

```
uber-clone/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── index.js
└── Readme.md
```

### Testing

To run tests for the backend, navigate to the backend folder and use the following command:

```bash
npm test
```

To run tests for the frontend, navigate to the frontend folder and use the following command:

```bash
npm test
```

### Deployment

To deploy the backend server, you can use services like Heroku, AWS, or any other cloud provider. Ensure you set the environment variables on the server.

To deploy the frontend application, you can use services like Netlify, Vercel, or any other static site hosting provider. Ensure you set the environment variables in the hosting service.

### Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

Please ensure your code follows the project's coding standards and includes appropriate tests.



