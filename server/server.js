// Require
const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const routes = require('./routes/userRouter')

// App config
const app = express()
const connection_url = process.env.MONGODB_URL;
const port = process.env.PORT;


// Middlewares
app.use(express.json())

app.use('/', routes)
app.use('*', (req,res) => { res.send('Invalid Endport')})


// DB Config
mongoose.connect(connection_url,
    {useNewUrlParser: true,  useUnifiedTopology: true, serverSelectionTimeoutMS:10000})
    .then(() => {console.log("ready to use")},
    err => {console.log(err.message)}
)
const db = mongoose.connection;
    

 
// API Endpoints
const server = app.listen(port, () => {
    console.log(`URL = https://localhost:${port}//`);
})


module.exports = {
    server : server,
    db : db
}

    