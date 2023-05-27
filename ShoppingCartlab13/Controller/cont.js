 const Book = require('../mod/book');

 exports.addAllBook=(req, res, next)=>{
const add =new Book(null, req.body.title, req.body.ISBN, req.body.PublishedDate,req.body.Author).addAllBook();
res.json(add);

 }
 exports.replace =(req, res, next)=>{
    const rep =new Book(req.params.bookId, req.body.title, req.body.ISBN, req.body.PublishedDate,req.body.Author).replace();
    res.json(rep);
 }
  exports.getAllBook= (req,res,next)=>{
    res.json(Book.getAllBook());
  }
  exports.deleteBook= (req, res, next)=>{
    res.json( Book.deleteBook(req.params.bookId));
  }