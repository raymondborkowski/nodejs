var http = require('http'),
    fs = require('fs');

fs.readFile('helloworld.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
	console.log('Handled request');
    }).listen(8080, "0.0.0.0");
});
//Enter IP Adress you are running on
console.log('Server running a http://0.0.0.0:8080/');
