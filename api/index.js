const express = require('express')
const app = express()
const port = 4000
const cors = require('cors')
const mongoose = require('mongoose')
const router = express.Router()
const routes = require('./src/routes/crmRoutes')
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/crm').then(() => {
  console.info('Connected to mongodb!')
});
mongoose.set('strictQuery', true)


app.use(cors())

app.use((req, res, next) => {
  console.info("Incoming message")
  next()
})

app.use('/', routes)


app.get('/api', (req,res) => {
  res.status(200).json(
    {
      status: 200,
      data: "Hello World"
    }
  )
})

app.listen(port, () => {
  console.info(`Server is running on port ${port}.`)
})