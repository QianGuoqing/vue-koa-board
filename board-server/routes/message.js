const router = require('koa-router')()

router.prefix('/message')

router.get('/', async ctx => {
  ctx.body = 'This is message page'
})

module.exports = router