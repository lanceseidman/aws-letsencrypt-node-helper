var express = require("express");
var app = express();
app.get('/.well-known/acme-challenge/<code-here>', (req, res) => {
    res.send('<Code-Here>');
});

app.listen(8081); // This port is used for AWS as you can't run 80/443; Using iptables for redirect.
