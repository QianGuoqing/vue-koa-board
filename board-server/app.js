const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')
const mongoose = require('mongoose')
const dbConfig = require('./databases/config')
const messageRoute = require('./routes/message')

const app = new Koa()

app.use(bodyParser())
app.use(cors())
app.use(messageRoute.routes())

app.use(async ctx => {
  ctx.body = 'board server'
})

mongoose.connect(dbConfig.dbUrl, err => {
  if (err) {
    console.log('Connection Failed: ', err)
  } else {
    console.log('Connection Success')
  }
})

app.listen(3333, () => {
  console.log('Listening at port 3333')
})
