/*
File name: books.js
Author's name: Afzal shaikh
Student ID: 301184760
Date: October 28, 2021
*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
