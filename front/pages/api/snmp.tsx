var snmp = require('net-snmp')
import {useState} from 'react';

export default function handler(req,res){
    console.log(req.query)
    var session = snmp.createSession(`${req.query.network}`, "public");
    var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];
    //var sysUptime = ["1.3.6.1.4.1.2021.10.1.3.1"];
    var oid = [`${req.query.oid}`];
    var ret = [''];
    session.get (oid, function (error, varbinds) {
        if (error) {
            console.error (error);
        } else {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError (varbinds[i])) {
                    console.error (snmp.varbindError (varbinds[i]));
                } else {
                    console.log (varbinds[i].oid + " = " + varbinds[i].value);
                    ret[i] += varbinds[i].value;
                }
            }
            res.send(JSON.stringify(ret));
        }
    });
}