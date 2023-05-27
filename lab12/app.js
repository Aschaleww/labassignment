const express = require('express');
const app = express();

// Set up static file serving
app.use(express.static(__dirname +'/lab12'));
app.use(express.json())


// Home route ("/")
app.get('/', (req, res) => {
    console.log("this is the first one");
  res.sendFile(__dirname + '/views/index.html');
  
});

// Users route ("/users")
const usersRouter = express.Router();

usersRouter.get('/', (req, res) => {
  // Handle GET request for users
  res.send('This is the users page.');
});

usersRouter.post('/', (req, res) => {
  // Handle POST request for users
  res.send('POST request received for users.');
});

app.use('/users', usersRouter);

// Products route ("/products")
const productsRouter = express.Router();

productsRouter.get('/', (req, res) => {
  // Handle GET request for products
  res.send('This is the products page.');
});

productsRouter.post('/', (req, res) => {
  // Handle POST request for products
  res.send('POST request received for products.');
});

app.use('/products', productsRouter);
// 404 Page
app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
  });
  
  // Error handling
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
// Start the server
app.listen(4005, () => {
  console.log('Server is running on port 3000');
});
