var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('<style>span {font-size:36px;} .r b{color:green;} </style><h1>DEMO API v.1</h1><h2>Objective - StartTestingApiWithPostman</h2>\n<p>And it work propper :) short instructions, you may calls:<br><span class="r">ask about actual courses:<br><b>GET</b> /bye/{currency} to receive information about our BYE prices<br><b>GET</b> /sell/{currency} to receive information about our SELL prices</span></p>\n');
});


app.get('/contacts', function(req, res) {
  res.send('<h1>Contacts</h1>\n<br>Contact page available and will be contains contacts in future\n');
});

app.get('/bye/:name', function(req, res) {
   // Get /bye/usd
   console.log(req.params.name)
   // => usd
res.send('{"id": 1,"You may bye":"usd","exchange rate":4.00}');
res.send({ "some": "json" });
res.send("html for Maximum Pain's web page");
res.send(404, 'No musicians here');
res.send(500, { error: 'you blew it' });
res.send(200);
});

app.listen(3001);
console.log('Listening on port 3001...');