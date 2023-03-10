
const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./db/connect')
const todo = require('./routes/todo')
//Define
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 5000

// Configs
dotenv.config()

//Middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//Routes
app.use('/todo', todo)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT , () => console.log(`server is running on port ${PORT}`))
    } catch (error) {
        console.log(error);
		process.exit(1);
    }
}

start()