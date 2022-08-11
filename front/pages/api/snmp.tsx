var snmp = require('net-snmp');
import {useState} from 'react';

export default function handler(req,res){
    console.log(req.query)
    var session = snmp.createSession(`${req.query.network}`, "public");
    var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];
    //var sysUptime = ["1.3.6.1.4.1.2021.10.1.3.1"];
    var oid = [`${req.query.oid}`];
    let ret = {};
    if(req.query.req == 'get'){
        session.get (oid, function (error, varbinds) {
            if (error) {
                console.error (error);
            } else {
                for (var i = 0; i < varbinds.length; i++) {
                    if (snmp.isVarbindError (varbinds[i])) {
                        console.error (snmp.varbindError (varbinds[i]));
                    } else {
                        console.log (varbinds[i].oid + " = " + varbinds[i].value);
                        ret = varbinds[i].value; 
                    }
                }
                res.send(JSON.stringify(ret));
            }
        });
    }
    else if (req.query.req == 'walk'){
        console.log('waaaaaaalk');
        let ret = [];

        function doneCb (error) {
            if (error)
                console.error (error.toString ());
        }
        
        function feedCb (varbinds) {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError (varbinds[i]))
                    console.error (snmp.varbindError (varbinds[i]));
                else
                    if(varbinds[i].oid == '1.3.6.1.2.1.2.2.1.10.200'){
                        session.close();
                        break;
                    }
                    ret.push([{
                        "oid": varbinds[i].oid,
                        "value": varbinds[i].value
                    }])
                    console.log (varbinds[i].oid + "|" + varbinds[i].value);
            }
        }
        var maxRepetitions = 1;
        var oid2 = `${req.query.oid}`;
        session.walk (oid2, maxRepetitions, feedCb, doneCb);

    }
    else if (req.query.req == 'getNext'){
        ret = ['']
        var oid3 = [`${req.query.oid}`, "1.3.6.1.2.1.2.2.1.10.200"]
        var nonRepeaters = 0;
        session.getBulk (oid3, nonRepeaters, function (error, varbinds) {
            if (error) {
                console.error (error.toString ());
            } else {
                // step through the non-repeaters which are single varbinds
                for (var i = 0; i < nonRepeaters; i++) {
                    if (i >= varbinds.length)
                        break;

                    if (snmp.isVarbindError (varbinds[i]))
                        console.error (snmp.varbindError (varbinds[i]));
                    else
                        console.log (varbinds[i].oid + "|" + varbinds[i].value);
                }

                // then step through the repeaters which are varbind arrays
                for (var i = nonRepeaters; i < varbinds.length; i++) {
                    for (var j = 0; j < varbinds[i].length; j++) {
                        if (snmp.isVarbindError (varbinds[i][j]))
                            console.error (snmp.varbindError (varbinds[i][j]));
                        else
                            console.log (varbinds[i][j].oid + "=" + varbinds[i][j].value);
                            ret += varbinds[i][j].value
                    }
                }
            }
        });
        console.log(ret);
        res.send(JSON.stringify(ret));
    }
}