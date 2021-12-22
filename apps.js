var http = require('http');

const bio = {
    nama : "Arry Wiandana Syahputra",
    kota : "Bogor",
    skill : ['SD WAN','Python','Netsec'],
    publish : true,
}

const jsonContent = JSON.stringify(bio);

http.createServer(function(req,res) {
    res.writeHead(200, {'Content-Type' : 'application/json'})
    res.end(jsonContent);
}).listen(3001);

