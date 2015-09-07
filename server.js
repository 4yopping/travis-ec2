import koa from 'koa'
import Router from 'koa-router'

let server = koa()
let router = new Router({ prefix: '/api' })

// Logger
server.use(function *(next) {
  var start = new Date()
  yield next
  var ms = new Date() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

// Main
router.get('/', function *() {
  this.body = {
    api: '1.0.0',
    name: 'API'
  }
})

server
  .use(router.routes())
  .use(router.allowedMethods())

server.listen(process.env.PORT || 3000)

export default server
