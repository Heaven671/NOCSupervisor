import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Center} from '@chakra-ui/react'
import { useEffect } from 'react';

// This gets called on every request
export async function getServerSideProps({req,res}) {
    // Fetch data from external API
    res = await fetch("http://localhost:3000/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk")
    const data = await res.json()
    for(let keys in data)
        console.log(data[keys] );
    // Pass data to the page via props
    return { props: { data } }
}
  
const mainPage = () => {    
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [dataLoaded, setDataLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.5.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            setName(data)
            setDataLoaded(true)
            console.log("data :" + data)
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
            setContact(data)
            setDataLoaded(true)
            console.log(data)
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
            console.log(data)
        })
        .catch((e) => {
            console.error(e);
            setDataLoaded(false)
            setUptime(e)
        })
    }, [])
        return (
            <>
                <NavBar/>
                <NavBar2/>
                <Flex justifyContent="center" ml={0} width="auto">
                    <Center>
                        <Grid  ml={'15px'} width="100%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                            <GridItem>
                                <Card bg="gray.700" 
                                    isLoaded={dataLoaded}
                                    name={isName}
                                    contact={isContact}
                                    uptime={isUptime}>
                                </Card>
                            </GridItem>

                            <GridItem mt={50} ml={10} height="40vh"><LineChart/></GridItem>
                            <GridItem mt={50} ml={10} height="40vh"><LineChart/></GridItem>
                            <GridItem mt={50} ml={10} height="40vh"><LineChart/></GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;