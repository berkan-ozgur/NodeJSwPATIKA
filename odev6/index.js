const Koa = require('koa')

const app = new Koa()

app.use(ctx => {
    ctx.status = 200;
    if (ctx.url === '/') {
        ctx.body = '<h1>This page is index page!</h1>'
    }
    else if (ctx.url === '/about') {
        ctx.body = '<h1>This page is about page!</h1>'
    }
    else if (ctx.url === '/contact') {
        ctx.body = '<h1>This page is contact page!</h1>'
    }
    else {
        ctx.status = 404;
        ctx.body = '<h1>404 Error</h1>'
    }
});


const port = 3000;
app.listen(port, () => {
    console.log('Server is up!..')
})