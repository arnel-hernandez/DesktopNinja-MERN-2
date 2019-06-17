const express = require('express')
const mongodb = require('mongodb')
const router = express.Router()

//@route GET /items , show items
router.get('/', async (req, res) => {
    const posts = await loadCartCollection();
    res.send(await posts.find({}).toArray());
})

async function loadCartCollection() {
    const client = await mongodb.MongoClient.connect('mongodb+srv://arnel_men011:Pdnejoh011@cluster0-kec4k.mongodb.net/test?retryWrites=true',{ 
        useNewUrlParser: true
    })

    return client.db('user').collection('cart');
}

module.exports = router;