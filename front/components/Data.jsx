import {useEffect} from 'react'
import axios from 'axios'
const url = "/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk";

function fetchData(value){

  useEffect(() => {
    
  }, [value]);

}

export default fetchData;