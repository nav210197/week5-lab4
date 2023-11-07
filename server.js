const connectDB = require("./config/db");
const express = require("express");

// express app
const app = express();
connectDB();

// Import the controllers

// middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("API Running!"));

//Routes

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
const Blog = require("../models/blogModel");

// Create a new blog
const createBlog = async (req, res) => {
  try {
    const { title, snippet, body } = req.body;
    if (!title || !snippet || !body) {
      return res
        .status(400)
        .json({ error: "All fields (title, snippet, body) are required" });
    }

    const newBook = new Book({ title, snippet, body });
    const savebook = await newBook.save();

    res.status(201).json(savedBook;
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET all books
const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// GET a single blog by ID
const getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// DELETE a book by ID
const deleteBook = async (req, res) => {
  try {
    const book = await Blog.findByIdAndDelete(req.params.id);
    if (!book) {
      return res.status(404).json({ error: "Book not found" });
    }
    res.json({ message: "Book deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update (Patch) a single book by ID
const patchBook = async (req, res) => {
  try {
    const book = await Book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Replace (Put) a single book by ID
const putbook = async (req, res) => {
  try {
    const book = await book.findOneAndReplace(
      { _id: req.params.id },
      req.body,
      { new: true }
    );

    if (!book) {
      return res.status(404).json({ error: "book not found" });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createbook,
  getbooks,
  getbook,
  deletebook,
  patchbook,
  putbook,
};