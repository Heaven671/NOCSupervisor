import { rmSync } from "fs";

var snmp = require('net-snmp');

export default async function handler(req,res){
    var session = snmp.createSession(`${req.query.network}`, "public");
    var oids = ["1.3.6.1.2.1.1.5.0", "1.3.6.1.2.1.1.6.0"];
    //var sysUptime = ["1.3.6.1.4.1.2021.10.1.3.1"];
    var oid = [`${req.query.oid}`];
    let ret =[];
    let response

    if(req.query.req == 'get'){
        session.get (oid, function (error, varbinds) {
            if (error) {
                console.error(req.query.network)
                console.error (error);
            } else {
                for (var i = 0; i < varbinds.length; i++) {
                    if (snmp.isVarbindError (varbinds[i])) {
                        console.error (snmp.varbindError (varbinds[i]));
                    } else {
                        response = (varbinds[i].value).toString()
                        console.log (varbinds[i].oid + " = " + varbinds[i].value);
                        ret.push({
                            "oid": varbinds[i].oid,
                            "value": varbinds[i].value.toString()
                        })
                    }
                }
                res.send(ret);
            }
        });
    }
    if(req.query.req == 'getData'){
        session.get (oid, function (error, varbinds) {
            if (error) {
                
                console.error (error);
            } else {
                for (var i = 0; i < varbinds.length; i++) {
                    if (snmp.isVarbindError (varbinds[i])) {
                        console.error (snmp.varbindError (varbinds[i]));
                    } else {
                        let response = (varbinds[i].value).toString()
                        let oid = varbinds[i].oid;
                        //console.log (varbinds[i].oid + " = " + varbinds[i].value);
                        for(let j = 0; j < 10; ++i){
                            ret.push({
                                "oid": oid,
                                "value": response
                            })
                        }
                    }
                }
                res.send(ret);
            }
        });
    }
    else if (req.query.req == 'walk'){
        let ret = [];

        function doneCb (error) {
            if (error)
                console.error (error.toString ());
        }
        
        function feedCb (varbinds) {
            for (var i = 0; i < varbinds.length; i++) {
                if (snmp.isVarbindError (varbinds[i]))
                    console.error (snmp.varbindError (varbinds[i]));
                else {
                    if( ((req.query.network == "192.168.3.41") && (varbinds[i].oid == "1.3.6.1.2.1.2.2.1.16.162" || varbinds[i].oid == "1.3.6.1.2.1.2.2.1.10.162"))  ){
                        session.close();
                        res.send(JSON.stringify(ret));
                        break;
                    }
                    else if(varbinds[i].oid == req.query.stop){
                        session.close()
                        res.send(JSON.stringify(ret))
                        break;
                    }
                    ret.push({
                        "oid": varbinds[i].oid,
                        "value": varbinds[i].value instanceof Object ?  varbinds[i].value.toString() : varbinds[i].value
                    })
                    //console.log (varbinds[i].oid + "|" + varbinds[i].value);
                }
            }
        }
        var maxRepetitions = 1;
        var oid2 = `${req.query.oid}`;
        session.walk (oid2, maxRepetitions, feedCb, doneCb)
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
        res.send(JSON.stringify(ret));
    }
}