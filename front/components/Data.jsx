import {useEffect} from 'react'
import axios from 'axios'
const url = "/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=getNext";

export const fetchData = async () => {
    let ret = ['']
    try {
      ret += await axios.get(url)
      console.log("ret :" + ret);
    
      return ret;
      
    }
    catch(err) {
      ret = err
      return ret;
    }
  /*useEffect(async () => {
    await fetch("/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.31.1.1.1.10.10")
    .then((data) =>{
      console.log("data : " + data)
      let modifiedData
      modifiedData.map = (data) => ({
          ifOutOctets: data
      })
      let ret = data
      return ret;
    })
    .catch((error) => {
      let ret = error
      return ret;
    })

  })*/
}
