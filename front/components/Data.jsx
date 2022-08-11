import {useEffect} from 'react'
import axios from 'axios'
const url = "/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk";

const fetchData = async () => {
    /*let modifiedData = [];
    let ret;
    try {
      await axios.get()
      .then((data) => {
        modifiedData = {...data};
        console.log({...modifiedData});
      })
      .catch((e) => {
        console.error(e);
      })
      return modifiedData;
    }
    catch(err) {
      ret = err
      return ret;
    }*/
  /*useEffect(async () => {
    await fetch(url)
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

export default fetchData();