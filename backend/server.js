const http = require("http");  // Using 'http' instead of 'https'
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);  // Creates the HTTP server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
