const express = require("express");
const { userMiddleWare } = require("../middlewares/user");
const { issuedmodel, bookmodel } = require("../db");

const booksRouter = express.Router();

// Public route to preview all books
booksRouter.get("/preview", async (req, res) => {
    try {
        const books = await bookmodel.find({});
        res.json({ books });
    } catch (e) {
        res.status(500).json({ message: "Error retrieving books", error: e.message });
    }
});

// Protected route to issue a book
booksRouter.post("/issue", userMiddleWare, async (req, res) => {
    const userId = req.userId;
    const bookId = req.body.bookId;

    try {
        await issuedmodel.create({ userId, bookId });
        res.json({ message: "Book issued successfully" });
    } catch (e) {
        res.status(500).json({ message: "Error issuing book", error: e.message });
    }
});

module.exports = {
    booksRouter
};
