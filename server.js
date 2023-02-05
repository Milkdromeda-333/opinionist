const express = require('express')
require('dotenv').config()
const app = express()
const PORT = 8080
const connectDB = require('./db/connectDB');
const morgan = require('morgan')

//  ROUTES
const postsRouter = require('./routes/postsRouter');
const commentsRouter = require('./routes/commentsRouter');
const userRouter = require('./routes/userRouter')

// MIDDLEWARE

app.use(morgan('dev'))
app.use(express.json()) // parses requests for JSON
// routing
app.use('/posts', postsRouter);
app.use('/comments', commentsRouter);
app.use('/user', userRouter);

// START SERVER

// attempts to connect to db and then to port, if theres any error it will be logged
function start() {
    try {
        connectDB(process.env.MONGO_URI)
        app.listen(PORT, (error) => {
        if(!error)
            console.log("Server is Successfully Running, and App is listening on port "+ PORT)
        else 
            console.log("Error occurred, server can't start: ", error);
        }
        )
    }
    catch (err) {
        console.log(err)
    }
}
start()

