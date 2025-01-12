# Uber Clone

This project is an Uber clone built using the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication (signup and login)
- Captain (driver) authentication (signup and login)
- Home page with a link to the login page
- Responsive design

## Pages

### Home
The Home page provides an entry point for users to get started with Uber. It includes a link to the login page.

### UserLogin
The UserLogin page allows existing users to log in with their email and password.

### UserSignup
The UserSignup page allows new users to create an account by providing their first name, last name, email, and password.

### CaptainLogin
The CaptainLogin page allows existing captains (drivers) to log in with their email and password.

### CaptainSignup
The CaptainSignup page allows new captains (drivers) to create an account by providing their first name, last name, email, password, and vehicle information.

## Technologies Used

- **Frontend:**
  - React
  - Vite
  - Tailwind CSS
  - React Router

- **Backend:**
  - Node.js
  - Express
  - MongoDB

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/abhijeetroyyy/uber-clone.git
    ```

2. Navigate to the project directory:
    ```sh
    cd uber-clone/frontend
    ```

3. Install the dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`
Builds the app for production to the `dist` folder.

### `npm run serve`
Serves the production build from the `dist` folder.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## Learn More

To learn more about React and Vite, check out the following resources:

- [React documentation](https://reactjs.org/)
- [Vite documentation](https://vitejs.dev/)
