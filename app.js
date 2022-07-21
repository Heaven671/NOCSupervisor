var dotenv = require('dotenv/config');
const express = require("express");
var app = express();
var csurf = require('csurf')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var snmp = require ("net-snmp");
var mongoose = require("mongoose");



var csrfProtection = csurf({ cookie: true })
var parseForm = bodyParser.urlencoded({ extended: false })

app.use(cookieParser());

mongoose.connect("mongodb://localhost:27017", function(err) {
  if (err) { throw err; }
  else { console.log(`Connected to DB ${process.env.DB_URI}`); }
});

app.get("/", (_,res) => {
    res.send("hello world !")
});

app.post("/api/logIn", (req,res) => {
    res.send({message: "not connected"});
});

app.listen(process.env.PORT, () => 
    console.log(`Backend app listening on port ${process.env.PORT}!`),
);
var options = {
    port: 161,
    retries: 1,
    timeout: 5000,
    backoff: 1.0,
    transport: "udp4",
    trapPort: 162,
    version: snmp.Version2c,
    backwardsGetNexts: true,
    reportOidMismatchErrors: false,
    idBitsSize: 32
};

var session = snmp.createSession ("127.0.0.1", "noc", options);

var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];


session.get (oids, function (error, varbinds) {
    if (error) {
        console.error (error);
    } else {
        for (var i = 0; i < varbinds.length; i++) {
            if (snmp.isVarbindError (varbinds[i])) {
                console.error (snmp.varbindError (varbinds[i]));
            } else {
                console.log (varbinds[i].oid + " = " + varbinds[i].value);
            }
        }
    }
    //session.close ();
});

//var oids = ["1.3.6.1.2.1.1.1.0","1.3.6.1.2.1.1.4.0"];
var oid = "1.3.6.1.2.1.1.5.0";

function doneCb (error) {
    if (error)
        console.error (error.toString ());
}

function feedCb (varbinds) {
    for (var i = 0; i < varbinds.length; i++) {
        if (snmp.isVarbindError (varbinds[i]))
            console.error (snmp.varbindError (varbinds[i]));
        else
            console.log (varbinds[i].oid + "|" + varbinds[i].value);
    }
}

var maxRepetitions = 1;

session.walk (oid, maxRepetitions, feedCb, doneCb);

session.on("error", function (error) {
    console.log (error.toString ());
    session.close ();
});

//session.close();