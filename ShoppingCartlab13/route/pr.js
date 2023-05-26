
 const express = require('express');
 const controllers = require('../Controller/cont');
 const router =express.Router();

 router.get('/',controllers.getAllBook );
 router.put('/:bookId' , controllers.replace);
 router.post('/', controllers.addAllBook);
 router.delete('/:bookId', controllers.deleteBook);

 module.exports=router;


 






