import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Center} from '@chakra-ui/react'
import { useEffect } from 'react';
import {FcOk} from 'react-icons/fc'
import {AiOutline} from 'react-icons/ai'
import {Auth} from './_app';

const mainPage = () => {    
    const [showStatus, setStatus] = useState(false)
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [isData, setData] = useState('')
    const [dataLoaded, setDataLoaded] = useState(false)
    const [chartData, setChartData] = useState({})

    let arr = [];

    Auth();

    useEffect(() => {
        fetch(`/api/snmp?network=127.0.0.1&oid=1.3.6.1.2.1.1.5.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            let value = [""];
            for(let i = 0; i < data.data.length; ++i){
                value[i] = String.fromCharCode(data.data[i])
            }
            value = value.join("");
            setName(value)
            setDataLoaded(true)
            console.log(typeof(value))
            console.log("data :" + value)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=127.0.0.1&oid=1.3.6.1.2.1.1.4.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            let value = [""];
            for(let i = 0; i < data.data.length; ++i){
                value[i] = String.fromCharCode(data.data[i])
            }
            value = value.join("");
            setContact(value)
            setDataLoaded(true)
            console.log(value)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=127.0.0.1&oid=1.3.6.1.2.1.1.3.0&req=get`)
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

        return (
            <>
                <NavBar2/>
                <Flex justifyContent="center" ml={0} width="auto">
                    <Center>
                        <Grid p={100} width="auto" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                            <GridItem>
                                <Card bg="gray.700" 
                                    isLoaded={dataLoaded}
                                    name={isName}
                                    contact={isContact}
                                    uptime={isUptime}
                                    icon={showStatus ? FcOk : AiOutline}>
                                </Card>
                            </GridItem>

                            <GridItem mt={50} ml={10} height="40vh"><LineChart/></GridItem>
                            <GridItem mt={50} ml={10} height="40vh"></GridItem>
                            <GridItem mt={50} ml={10} height="40vh"></GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;