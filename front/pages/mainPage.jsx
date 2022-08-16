import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Center} from '@chakra-ui/react'
import { useEffect } from 'react';
import {FcOk} from 'react-icons/fc'
import {AiOutline} from 'react-icons/ai'
import {Auth} from './_app';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const mainPage = () => {    
    const [showStatus, setStatus] = useState(false)
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [isData, setData] = useState({})
    const [isCPU, setCPU] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    const [isDevice, setDevice] = useState('')

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
            console.log(data)
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
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.4.1.2021.11.9.0&req=get')
        .then((res) => res.json())
        .then((data) => {
            arr.push(data);
            console.log("arr: " + arr)
            setCPU(arr);
        })
        .catch((e) => {
            setCPU(e);
        })
    }, [])

    useEffect(() => {
        fetch('/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk')
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setData(data)
          console.log("ISDATA : "+ JSON.parse(isData))
        })
        .catch((e) => {
            setData(e);
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

                            <GridItem mt="100px" height="40vh">
                                <LineChart 
                                    data={isData}
                                    label="Octets / interfaces"
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                <DoughnutChart 
                                    data={isData}
                                    label="Osef"
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                <LineChart 
                                    data={isCPU}
                                    label="CPU Usage / User"
                                    />
                            </GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;