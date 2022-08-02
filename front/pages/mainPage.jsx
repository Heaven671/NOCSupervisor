import Card from '../components/Card';
import NavBar from '../components/NavBar'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import { useEffect } from 'react';

const mainPage = () => {    
    const [data, setData] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('/api/snmp')
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setIsLoaded(true);
            <p>{data}</p>
        })
        .catch((error) => {
            console.error(error);
            <p>{error}</p>
        })
    }, [])
        return (
            <div>
                <NavBar/>
                <Flex justifyContent="center" width="100%">
                    <Grid width="80%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                        <GridItem>
                            <Card bg="gray.700" 
                                isLoaded={false}>

                            </Card>
                        </GridItem>
                        <GridItem height="40vh"><Card bg="none"/></GridItem>
                        <GridItem height="40vh"><Card/></GridItem>
                        <GridItem height="40vh"><Card/></GridItem>

                    </Grid>
                </Flex>
            </div>
        )
}

export default mainPage;