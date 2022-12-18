const http = require('http');
const port = 5000;

const server = http.createServer((req, res) => {
    const url = req.url
    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>This page is index page.</h2>')
    }
    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>This page is about page!</h2>')
    }
    else if (url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>This page is contact page!</h2>')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.write('404 error')
    }
    res.end();
})

server.listen(port, () => {
    console.log(`Sunucu ${port} port üzerinde canlıya çekildi! :)`)
})