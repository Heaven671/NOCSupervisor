const mongoose = require('mongoose')
const argon2i = require('argon2-ffi').argon2i;
const userSchema = require("../../models/user.js");
const jwt = require('jsonwebtoken');
var dotenv = require('dotenv/config');
import getConfig from 'next/config';
import { apiHandler } from 'helpers/api';

const { serverRuntimeConfig } = getConfig();
export default async function handler(req, res) {
    var userAccount;
    await mongoose.connect("mongodb://127.0.0.1:27017", {useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(async (e) =>{
        console.log(`Connected to DB ${process.env.DB_URI}`);
        userAccount = await userSchema.findOne({mail: req.body.mail})
    })
    .catch((e) =>{
        console.log("ERROR:")
        console.log(e);
    });

    console.log(req.body);
    console.log(userAccount)
    if(userAccount != null){
        argon2i.verify(userAccount.password, req.body.pass)
        .then( (succeed) => {
            if(succeed){
                const token = jwt.sign({sub: userAccount.__v}, process.env.JWT_SECRET, {expiresIn: '7d'});
                res.status(200).send({success: true, 
                          mail: req.body.mail,
                          id: userAccount.__v,
                          token
                        })
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
        res.status(500).send;
    }
}