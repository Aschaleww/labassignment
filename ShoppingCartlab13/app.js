const express = require('express');
const productRouter = require('./route/pr');

const app = express();

app.use(express.json()); //req.body = {...}
app.use(express.urlencoded({ extended: false }));


app.use('/products', productRouter);

app.listen(3003, ()=>console.log('listen on 3003'));








