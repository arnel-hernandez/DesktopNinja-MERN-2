const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config')

const app = express();

//bodyparser middleware & cors(google chrome)

app.use(express.json())
app.use(cors());

//DB Config
const db = config.get("mongoURI");

//Connect to MongoDB
mongoose.connect(db,{useNewUrlParser: true, useCreateIndex: true})
.then(() => console.log('MongoDB Connected..'))
.catch(err => console.log(err));

const products = require('./routes/api/products')
const cart = require('./routes/api/cart')

//USE ROUTES
app.use('/products', products)
app.use('/cartProducts', cart)

//TO DEPLOY
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server Started On Port ${port}`))