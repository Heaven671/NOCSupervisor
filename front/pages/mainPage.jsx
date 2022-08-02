import Card from '../components/Card';
import NavBar from '../components/NavBar'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
import { useEffect } from 'react';

const mainPage = () => {    
    const [isData, setData] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('/api/snmp')
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setData(data);
            isLoaded(true);
        })
        .catch((e) => {
            console.error(e);
            setData(e)
        })
    }, [])

        return (
            <div>
                <NavBar/>
                <Flex justifyContent="center" width="100%">
                    <Grid width="80%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                        <GridItem>
                            <Card bg="gray.700" 
                                isLoaded={isLoaded}>
                                    <p>{isData}</p>
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