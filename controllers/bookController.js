const Book = require("../models/book");

exports.getBooks = (req,res,next)=>{
    res.status(200).json(Book.getAll());
}

exports.getBookById = (req,res,next)=>{
    res.status(200).json(Book.findById(req.params.bookId));
}

exports.save = (req,res,next)=>{
    const book = req.body;
    const newBook = new Book(null,book.title,book.ISBN,book.publishedDate,book.author).save();
    res.status(201).json(newBook);
}

exports.update = (req,res,next)=>{
    const book = req.body;
    const updatedBook = new Book(req.params.bookId,book.title,book.ISBN,book.publishedDate,book.author).update();
    res.status(200).json(updatedBook);
}

exports.deleteById = (req,res,next)=>{
    Book.deleteById(req.params.bookId);
    res.status(200).end();
}