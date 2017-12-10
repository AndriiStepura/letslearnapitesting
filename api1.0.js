var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('<head>\n<title>DEMO API v.1.0</title>\n<style>span {font-size:36px;} .r b{color:green;} span a {font-size:36px; color:#009900;} .code {font-size:10px; color:#333;} .code a {font-size:10px; color:#333;}</style>\n</head>\n\n<h1>DEMO API v.1.0</h1><h2>Objective - StartTestingApiWithPostman</h2>\n<p>And it work propper :) short instructions, you may calls:\n<br><br><span class="r">ask about actual courses:<br>\n<br><b>GET</b> /bye/{currency} to receive information about our BYE prices <span class="code">\n<br>Ex.: <a href="/sell/eur">GET SELL EUR</a></span>\n<br>\n<br><b>GET</b> /sell/{currency} to receive information about our SELL prices</span>\n<br><span class="code">Ex.: <a href="/bye/eur">GET BYE EUR</a></span>\n<br></p>\n<br>With any questions you may call to out support - <span class="r"><a href="/contacts">contacts</a></span>\n');
});


app.get('/contacts', function(req, res) {
  res.send('<h1>Contacts</h1>\n<br>Contact page available and will be contains contacts in future\n');
});

app.get('/bye/USD', function(req, res) {res.send('You may bye USD, exchange rate: 3.6845 PLN');});

app.get('/sell/EUR', function(req, res) {res.send('You may bye EUR, exchange rate: 4.3019 PLN');});

app.listen(3001);
console.log('Listening on port 3001...');