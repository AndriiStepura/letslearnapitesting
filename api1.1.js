var express = require('express');
var app = express();
app.get('/', function(req, res) {
  res.send('<head>\n<title>DEMO API v.1.1</title>\n<style>span {font-size:36px;} .r b{color:green;} span a {font-size:36px; color:#009900;} .code {font-size:10px; color:#333;} .code a {font-size:10px; color:#333;}</style>\n</head>\n\n<h1>DEMO API v.1.0</h1><h2>Objective - StartTestingApiWithPostman</h2>\n<p>And it work propper :) short instructions, you may calls:\n<br><br><span class="r">ask about actual courses:<br>\n<br><b>GET</b> /bye/{currency} to receive information about our BYE prices <span class="code">\n<br>Ex.: <a href="/sell/eur">GET SELL EUR</a></span>\n<br>\n<br><b>GET</b> /sell/{currency} to receive information about our SELL prices</span>\n<br><span class="code">Ex.: <a href="/bye/eur">GET BYE EUR</a></span>\n<br></p>\n<br>With any questions you may call to out support - <span class="r"><a href="/contacts">contacts</a></span>\n');
});


app.get('/contacts', function(req, res) {
  res.send('<h1>Contacts</h1>\n<br>Contact page available and will be contains contacts in future\n');
});

app.get('/bye/USD', function(req, res) {res.send('You may bye USD, exchange rate: 3.6845 PLN');});
app.get('/bye/EUR', function(req, res) {res.send('You may bye EUR, exchange rate: 4.3199 PLN');});
app.get('/bye/GBP', function(req, res) {res.send('You may bye GBP, exchange rate: 4.8205 PLN');});
app.get('/bye/CHF', function(req, res) {res.send('You may bye CHF, exchange rate: 3.7676 PLN');});
app.get('/bye/CAD', function(req, res) {res.send('You may bye CAD, exchange rate: 2.9412 PLN');});
app.get('/bye/SEK', function(req, res) {res.send('You may bye SEK, exchange rate: 0.4554 PLN');});
app.get('/bye/CZK', function(req, res) {res.send('You may bye CZK, exchange rate: 0.1686 PLN');});
app.get('/bye/AUD', function(req, res) {res.send('You may bye AUD, exchange rate: 2.8719 PLN');});
app.get('/bye/DKK', function(req, res) {res.send('You may bye DKK, exchange rate: 0.5829 PLN');});
app.get('/bye/NOK', function(req, res) {res.send('You may bye NOK, exchange rate: 0.4639 PLN');});
app.get('/bye/JPY', function(req, res) {res.send('You may bye 100 JPY, exchange rate: 3.2729 PLN');});
app.get('/bye/HUF', function(req, res) {res.send('You may bye 100 HUF, exchange rate: 1.3961 PLN');});
app.get('/bye/RUB', function(req, res) {res.send('You may bye RUB, exchange rate: 0.0674 PLN');});
app.get('/bye/TRY', function(req, res) {res.send('You may bye TRY, exchange rate: 1.026 PLN');});
app.get('/bye/CNY', function(req, res) {res.send('You may bye CNY, exchange rate: 0.5642 PLN');});
app.get('/bye/BGN', function(req, res) {res.send('You may bye BGN, exchange rate: 2.2273 PLN');});
app.get('/bye/HRK', function(req, res) {res.send('You may bye HRK, exchange rate: 0.5859 PLN');});
app.get('/bye/RON', function(req, res) {res.send('You may bye RON, exchange rate: 0.9543 PLN');});
app.get('/bye/ZAR', function(req, res) {res.send('You may bye ZAR, exchange rate: 0.2786 PLN');});
app.get('/bye/HKD', function(req, res) {res.send('You may bye HKD, exchange rate: 0.4812 PLN');});
app.get('/bye/MXN', function(req, res) {res.send('You may bye MXN, exchange rate: 0.2084 PLN');});
app.get('/bye/NZD', function(req, res) {res.send('You may bye NZD, exchange rate: 2.6313 PLN');});
app.get('/bye/SGD', function(req, res) {res.send('You may bye SGD, exchange rate: 2.7117 PLN');});

app.get('/sell/USD', function(req, res) {res.send('You may sell USD, exchange rate: 3.6642 PLN');});
app.get('/sell/EUR', function(req, res) {res.send('You may sell EUR, exchange rate: 4.3019 PLN');});
app.get('/sell/GBP', function(req, res) {res.send('You may sell GBP, exchange rate: 4.7783 PLN');});
app.get('/sell/CHF', function(req, res) {res.send('You may sell CHF, exchange rate: 3.7419 PLN');});
app.get('/sell/CAD', function(req, res) {res.send('You may sell CAD, exchange rate: 2.9236 PLN');});
app.get('/sell/SEK', function(req, res) {res.send('You may sell SEK, exchange rate: 0.4498 PLN');});
app.get('/sell/CZK', function(req, res) {res.send('You may sell CZK, exchange rate: 0.1645 PLN');});
app.get('/sell/AUD', function(req, res) {res.send('You may sell AUD, exchange rate: 2.8373 PLN');});
app.get('/sell/DKK', function(req, res) {res.send('You may sell DKK, exchange rate: 0.5752 PLN');});
app.get('/sell/NOK', function(req, res) {res.send('You may sell NOK, exchange rate: 0.4545 PLN');});
app.get('/sell/JPY', function(req, res) {res.send('You may sell 100 JPY, exchange rate: 3.2502 PLN');});
app.get('/sell/HUF', function(req, res) {res.send('You may sell 100 HUF, exchange rate: 1.3643 PLN');});
app.get('/sell/RUB', function(req, res) {res.send('You may sell RUB, exchange rate: 0.059 PLN');});
app.get('/sell/TRY', function(req, res) {res.send('You may sell TRY, exchange rate: 1.0069 PLN');});
app.get('/sell/CNY', function(req, res) {res.send('You may sell CNY, exchange rate: 0.5425 PLN');});
app.get('/sell/BGN', function(req, res) {res.send('You may sell BGN, exchange rate: 2.1814 PLN');});
app.get('/sell/HRK', function(req, res) {res.send('You may sell HRK, exchange rate: 0.5631 PLN');});
app.get('/sell/RON', function(req, res) {res.send('You may sell RON, exchange rate: 0.9304 PLN');});
app.get('/sell/ZAR', function(req, res) {res.send('You may sell ZAR, exchange rate: 0.2559 PLN');});
app.get('/sell/HKD', function(req, res) {res.send('You may sell HKD, exchange rate: 0.4602 PLN');});
app.get('/sell/MXN', function(req, res) {res.send('You may sell MXN, exchange rate: 0.1881 PLN');});
app.get('/sell/NZD', function(req, res) {res.send('You may sell NZD, exchange rate: 2.5817 PLN');});
app.get('/sell/SGD', function(req, res) {res.send('You may sell SGD, exchange rate: 2.6807 PLN');});

app.listen(3001);
console.log('Listening on port 3001...');