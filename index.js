require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const { userRouter } = require("./routes/user");
const { booksRouter } = require("./routes/books");
const { adminRouter } = require("./routes/admin");

app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/books", booksRouter);

async function main() {  
    try {
        await mongoose.connect(process.env.mongo_url);
        console.log("Database connected");
        app.listen(5000, () => console.log("Server started on port 5000"));
    } catch (err) {
        console.error("Database connection failed", err);
    }
}
main();
