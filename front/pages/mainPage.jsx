import Card from '../components/Card';
import NavBar from '../components/NavBar'
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import { useEffect } from 'react';

const mainPage = () => {    
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    useEffect(() => {
        fetch(`/api/snmp?network=192.168.3.11&oid=1.3.6.1.2.1.1.5.0`)
        .then((res) => res.json())
        .then((data) => {
            setName(data)
            setIsLoaded(true);
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
            setName(data)
            setIsLoaded(true);
            console.log(data)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
        })
    }, [])
    /*useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/snmp?network=192.168.3.11?oid=1.3.6.1.2.1.25.1.1.0")
            const data = await res.json();
            const days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche']

            const datas = {
                labels: days,
                datasets: [
                    {
                        label: "hrSysUptime",
                        data: data,
                        backgroundColor: [
                            "#ffbb11",
                            "#ecf0f1",
                            "#50AF95",
                            "#f3ba2f",
                            "#2a71d0"
                        ]
                    }

                ]
            }
            setChartData(datas)
        }
    })*/
        return (
            <div>
                <NavBar/>
                <Flex justifyContent="center" width="100%">
                    <Grid width="80%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                        <GridItem>
                            <Card bg="gray.700" 
                                isLoaded={isLoaded}
                                name={isName}
                                contact={isContact}>
                            </Card>
                        </GridItem>
                        <GridItem height="40vh"></GridItem>
                        <GridItem height="40vh"></GridItem>
                        <GridItem height="40vh"></GridItem>

                    </Grid>
                </Flex>
            </div>
        )
}

export default mainPage;