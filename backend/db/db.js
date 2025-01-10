const mongoose = require("mongoose");

async function connectToDb() {
    try {
        await mongoose.connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
    } catch (err) {
        console.error("Error connecting to the database: ", err.message);
        process.exit(1); // Exit the process with failure
    }
}

module.exports = connectToDb;
