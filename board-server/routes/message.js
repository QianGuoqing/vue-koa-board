const router = require('koa-router')()
const messageModel = require('../databases/models/message')

router.prefix('/message')

const REQUEST_SUCCESS = 1
const REQUEST_FAIL_WITH_EMPTY = 2
const REQUEST_FAIL_WITH_DUPLUCATE = 3

router.get('/', async ctx => {
  ctx.body = 'This is message page'
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