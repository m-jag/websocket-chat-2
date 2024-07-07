const express = require('express')
const app = express()
const port = 3000

const {MongoClient} = require('mongodb');
MongoClient.connect(process.env.MONGO_URL, function(err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});

const path = require('path')
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.send(`${process.env.MONGO_URL}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})