var dotenv = require('dotenv/config');
const express = require("express");
var app = express();
var csurf = require('csurf')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var snmp = require ("net-snmp");
var mongoose = require("mongoose");
const argon2i = require('argon2-ffi').argon2i;
const crypto = require('crypto')
const userSchema = require('./models/users')
const users = require('./models/users');



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

app.post("/api/signUp", (req,res) => {
    console.log(req.body);
    if(!validEmail(req.body.mail)){
        res.send({success: false,
        message: "Not a valid email"})
        return;
    };
    crypto.randomBytes(32, function(err, salt){
        argon2i.hash(req.body.pass,salt)
            .then(async (hash) =>{
                const user = new userSchema ({
                    name: req.body.name,
                    mail: req.body.mail,
                    pass: hash,
                });
                userSchema.exists({mail:req.body.mail})
                    .then( async(doc) =>{
                        if(doc == null){
                            const newUser = await user.save();
                            res.send({success: true})
                        }
                        else {
                            res.send({success: false,
                            message: "Existing credentials"})
                        }
                    })
                    .catch( (err) =>{
                        console.log(err);
                        res.send({
                            success:false,
                            error: {
                                status: err.status || 500,
                                message: "Network error"
                            }
                        });
                    })
            })
            .catch( (err) =>{
                console.log(err);
                res.send({
                    success: false,
                    error :  {
                        status: err.status || 500,
                        message: "Backend error"
                    }
                })
            })
    })
    res.send({message: "not connected"});
});

app.post("/api/logIn", async (req,res) =>{
    var userAccount = await users.findOne({name: req.body.mail})
    console.log(req.body);
    if(userAccount != null){
        argon2i.verify(userAccount.pass, req.body.pass)
        .then(succeed => {
            if(succeed){
                res.send({success: true, name: req.body.mail})
            }
            else{
                res.send({success: false, message: "Error verifying account"});
            }
        })
        .catch( (err) =>{
            res.send({success: false,
            error: {
                status: err.status || 500,
                message: err.message
            }})
        })
    }
    else {
        res.send({success: false,
        message: "Not existing account"});
    }
});

app.listen(process.env.PORT, () => 
    console.log(`Backend app listening on port ${process.env.PORT}!`),
);

function validEmail(email){
    const emailregex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if(!emailregex.text(email)) return false;
    return true;
}