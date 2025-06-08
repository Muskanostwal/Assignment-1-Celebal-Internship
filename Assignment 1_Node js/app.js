const http = require('http');
const fs  = require('fs');

const port = 3000;

const server = http.createServer(function(req,res){
    res.writeHead(200, { 
        'content-type' : 'text/html'
    });
    fs.readFile('index.html', function(err , content){
        if(err){
            res.writeHead(400);
            res.write("File not found");
        }else{
            res.write(content);
        }
        res.end();
    });
});

server.listen(port, function(error){
    if(error){
        console.log("something went wrong",error);
    }else{
        console.log("Server is running successfully");
    }
});

