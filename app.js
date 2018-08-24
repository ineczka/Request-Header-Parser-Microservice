var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
//var cors = require('cors');
//app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

app.get("/api/whoami", function(req, res){
  
   var h = req.headers;
   var headers =  {"ipaddress":h['x-forwarded-for'],"language": h["accept-language"],"software":h["user-agent"]};
   res.json(headers);
});



//listen("/", function(){})  - usually  listen takes url and function parameters,
// but when on cloud9 we use enviroment variables as parameters like below

app.listen(process.env.PORT,process.env.IP, function(){
    console.log("Server started!");
});