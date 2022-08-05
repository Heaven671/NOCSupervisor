import Card from '../components/Card';
import NavBar from '../components/NavBar';
import LineChart from '../components/LineChart';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import { useEffect } from 'react';


const mainPage = () => {    
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [dataLoaded, setIsLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.5.0`)
        .then((res) => res.json())
        .then((data) => {
            setName(data)
            setIsLoaded(false)
            console.log(data)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.4.0`)
        .then((res) => res.json())
        .then((data) => {
            setContact(data)
            console.log(data)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.3.0`)
        .then((res) => res.json())
        .then((data) => {
            data = Math.round(data/8640000)
            setUptime(data)
            console.log(data)
        })
        .catch((e) => {
            console.error(e);
            setUptime(e)
        })
    }, [])
        return (
            <div>
                <NavBar/>
                <Flex justifyContent="center" width="100%">
                    <Grid width="80%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                        <GridItem>
                            <Card bg="gray.700" 
                                isLoaded={dataLoaded}
                                name={isName}
                                contact={isContact}
                                uptime={isUptime}>
                            </Card>
                        </GridItem>
                        <GridItem height="40vh"><LineChart /></GridItem>
                        <GridItem height="40vh"></GridItem>
                        <GridItem height="40vh"></GridItem>

                    </Grid>
                </Flex>
            </div>
        )
}

export default mainPage;