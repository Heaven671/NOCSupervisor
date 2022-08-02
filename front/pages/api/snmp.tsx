var snmp = require('net-snmp')
import {useState} from 'react';

export default function handler(req,res){
    var session = snmp.createSession("192.168.3.11", "public");
    var sysLocationOid = "1.3.6.1.2.1.1.6"

    session.get (sysLocationOid, function (error, varbinds) {
        if (error) {
            console.error (error);
        } else {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError (varbinds[i])) {
                    console.error (snmp.varbindError (varbinds[i]));
                } else {
                    console.log (varbinds[i].oid + " = " + varbinds[i].value);
                    res.send(varbinds[i].value);
                }
            }
        }
        session.close ();
    });
}