const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

const ChatRoute = require('./routes/Chat.route');
app.use('/chat', ChatRoute);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})