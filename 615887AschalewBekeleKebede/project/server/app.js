const express = require('express');
const cors = require('cors');
const path = require('path');
const productRouter = require("./routes/productRouter");

const app = express();
app.use(cors());
app.use(express.json());

//place your code below
let db = [
    { id: 1, username: 'John', password: '111' },
    { id: 2, username: 'Edward', password: '222' },
    { id: 3, username: 'Asche', password: '333' }
];

app.post('/login', (req, res, next) => {
    const user = db.find(user => user.username === req.body.username && user.password === req.body.password);
    if (user) {
        res.json({ accessToken: `${user.id}-${user.username}-${Date.now().toString()}` })
    } else {
        res.json({ error: 'Invalid username and password!' });
        // throw new Error('dfdfdf');
    }
});

app.use('/products', productRouter);
app.use('/welcome', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'welcome.html'));
})
app.use('/static', express.static(path.join(__dirname, '..', 'client', 'public')))
app.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
})

// app.use((error, req, res, next)=>{
//     res.status(500).json({error: 'Invalid username and password!'});
// })


app.listen(3000, () => console.log('listening to 3000...'));
