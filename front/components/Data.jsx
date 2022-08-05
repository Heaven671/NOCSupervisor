import {useState, useeffect, useEffect} from 'react'

const url = "/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.31.1.1.1.10.10";

function fetchData(){
  let ret;
  useEffect(() => {
    fetch("/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.31.1.1.1.10.10")
    .then((data) =>{
      let modifiedData
      modifiedData.map = (data) => ({
          ifOutOctets: data
      })
      let ret = modifiedData;
      return ret;
    })
    .catch((error) => {
      let ret = error
      return ret;
    })
  }) 
}
export default fetchData;
