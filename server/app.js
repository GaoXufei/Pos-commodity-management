const Koa        = require('koa'),
      Router     = require('koa-router'),
      bodyParser = require('koa-bodyparser'),
      mongoose   = require('mongoose')


const app = new Koa(),
      router = new Router();


mongoose.connect('mongodb://127.0.0.1:27017/todo')

mongoose.connection.on('error', (err)=> {
    console.log(`数据库连接失败: \n${err}`)
})
mongoose.connection.on('open', () => {
    console.log(`数据库连接成功`)
})


// get
router.get('/', async ctx => {
    
})


router.post('/todo/api', async ctx => {



})



// 返回一个对象
function CreateData(title, content){
    return {
        "title": title,
        "content": content,
        "create_time": new Date().getTime(),
        "put_time": null
    }
}

app
    .use(router.routes())
    .use(router.allowedMethods())


app.listen(7001, '0.0.0.0', ()=> console.log('运行成功！'))


