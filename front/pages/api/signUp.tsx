var dotenv = require('dotenv/config');
var csurf = require('csurf')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var snmp = require ("net-snmp");
var mongoose = require("mongoose");
const argon2i = require('argon2-ffi').argon2i;
const crypto = require('crypto')
var userSchema = require("../../models/user.js");
const cors = require('cors');

export default async function handler(req, res) {
    console.log('0')
    await mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then((e) =>{
        console.log(`Connected to DB ${process.env.DB_URI}`);
    })
    .catch((e) =>{
        console.log("ERROR:")
        console.log(e);
    });
    console.log('mail:' + req.body.mail)
    if(!validEmail(req.body.mail)){
        res.send({success: false,
        message: "Not a valid email"})
        return;
    };
    crypto.randomBytes(32, function(err, salt){
        console.log("1");
        argon2i.hash(req.body.pass,salt)
            .then(async (hash) =>{
                console.log("1-a");
                const userModel = new userSchema ({
                    name: req.body.name,
                    mail: req.body.mail,
                    password: hash,
                    created: Date.now()
                });
                userSchema.exists({mail:req.body.mail})
                    .then( async (doc) =>{
                        console.log("2-a")
                        if(doc == null){
                            const newUser = await userModel.save();
                            res.send({success: true})
                        }
                        else {
                            res.send({success: false,
                            message: "Existing credentials"})
                        }
                    })
                    .catch( (err) =>{
                        console.log("2-b")
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
                console.log("1-b")
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
    console.log("end")
    //res.send({message: "not connected"});*/
}

function validEmail(email){
    const emailregex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if(!email.match(emailregex)) return false;
    return true;
}