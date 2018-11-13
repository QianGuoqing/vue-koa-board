const router = require('koa-router')()
const messageModel = require('../databases/models/message')

router.prefix('/message')

const SERVER_ERROR = 0
const REQUEST_SUCCESS = 1
const REQUEST_FAIL_WITH_EMPTY = 2
const REQUEST_FAIL_WITH_DUPLUCATE = 3

router.get('/', async ctx => {
  try {
    const results = await messageModel.find({})
    ctx.body = {
      code: REQUEST_SUCCESS,
      messages: results
    }
  } catch (error) {
    ctx.body = {
      code: SERVER_ERROR,
      message: 'Server Error'
    }
  }
})

router.post('/send', async ctx => {
  let { name, content } = ctx.request.body
  if (!name || !content) {
    ctx.body = {
      code: REQUEST_FAIL_WITH_EMPTY,
      message: 'Error Request with Empty Information'
    }
    return
  }
  let result = await messageModel.findOne({ name })
  if (result) {
    ctx.body = {
      code: REQUEST_FAIL_WITH_DUPLUCATE,
      message: 'Error Request with Duplicate Name'
    }
  } else {
    const message = new messageModel({
      name: name,
      content: content
    })
    await message.save()
    ctx.body = {
      code: REQUEST_SUCCESS,
      message: 'Request Success'
    }
  }
})

module.exports = router