import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import MultiLineChart from '../components/MultiLineChart';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Center} from '@chakra-ui/react'
import { useEffect } from 'react';
import {FcOk} from 'react-icons/fc'
import {AiOutline} from 'react-icons/ai'
import {Auth} from './_app';
import {Layout} from '../components/Layout'

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const mainPage = () => {    
    const [showStatus, setStatus] = useState(false)
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [isData, setData] = useState({})
    const [isData2, setData2] = useState({})
    const [isCPU, setCPU] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    const [isDevice, setDevice] = useState('')
    const [isLabel, setLabel] = useState({});
    const [diskSpace, setDiskSpace] = useState({});
    const [diskLabel, setDiskLabel] = useState({});
    const [totMemFree, setTotMemFree] = useState({})
    const [totMemReal, setTotMemReal] = useState({})
    const [availMemReal, setAvailMemReal] = useState({})


    let arr = [];

    Auth();

    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.5.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data[0].value)
            setName(data[0].value)
            setDataLoaded(true)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.4.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            setContact(data[0].value)
            setDataLoaded(true)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.3.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            data = Math.ceil(data/8640000)
            setUptime(data)
            setDataLoaded(true)
            setStatus(true);
            console.log("DAATAAAAA :" + data)
        })
        .catch((e) => {
            console.error(e);
            setDataLoaded(false)
            setUptime(e)
            setStatus(false)
        })
    }, [])
    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.4.1.0&req=get')
        .then((res) => res.json())
        .then((data) => {
            if(data[0].value == 1)
                setDevice('Routeur')
            else {
                setDevice('Switch')
            }
        })
        .catch((e) => {
            setDevice(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.16&req=walk&stop=1.3.6.1.2.1.2.2.1.16.200')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData2(data)
        })
        .catch((e) => {
            setData2(e);
            console.error(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk&stop=1.3.6.1.2.1.2.2.1.10.200')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data)
        })
        .catch((e) => {
            setData(e);
            console.error(e);
        })
    }, [])
    
    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.2&req=walk&stop=1.3.6.1.2.1.2.2.1.2.200')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setLabel(data)
        })
        .catch((e) => {
            console.error(e);
            setLabel(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.25.2.3.1.5&req=walk&stop=1.3.6.1.2.1.25.2.3.1.5.70')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDiskSpace(data)
        })
        .catch((e) => {
            console.error(e);
            setDiskSpace(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.25.2.3.1.6&req=walk&stop=1.3.6.1.2.1.25.2.3.1.6.70')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDiskLabel(data)
        })
        .catch((e) => {
            console.error(e);
            setDiskLabel(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.4.1.2021.4.6.0&req=get')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setAvailMemReal(data)
        })
        .catch((e) => {
            console.error(e);
            setAvailMemReal(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.4.1.2021.4.5.0&req=get')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTotMemReal(data)
        })
        .catch((e) => {
            console.error(e);
            setTotMemReal(e);
        })
    }, [])
    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.4.1.2021.4.11.0&req=get')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setTotMemFree(data)
        })
        .catch((e) => {
            console.error(e);
            setTotMemFree(e);
        })
    }, [])
        return (
            <>
                <NavBar2/>
                <Flex justifyContent="center" ml={0} width="auto">
                    <Center>
                        <Grid p={50} width="auto" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                            <GridItem>
                                <Card bg="gray.700" 
                                    isLoaded={dataLoaded}
                                    name={isName}
                                    contact={isContact}
                                    uptime={isUptime}
                                    devicetype={isDevice}
                                    icon={showStatus ? FcOk : AiOutline}>
                                </Card>
                            </GridItem>

                            <GridItem mt="100px" w="800px" height="40vh">
                                <MultiLineChart 
                                    firstDataset={isData}
                                    secondDataset={isData2}
                                    label="Octets / interfaces"
                                    labeldata={isLabel}
                                    title="Interfaces"
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                <DoughnutChart 
                                    data={diskSpace}
                                    labeldata={diskLabel}
                                    title="Espace en GO"
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                  
                            </GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;