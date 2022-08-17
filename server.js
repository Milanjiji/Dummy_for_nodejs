const  http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
      res.end('<html>hello to the welcome page</html>')  
    }
     if(req.url === '/about'){
        res.write('<h1>here is our short story</h1>')
    }
    
    res.end('<h1>!Opps cant find the page that you are looking for</h1>')
})

server.listen(4200)