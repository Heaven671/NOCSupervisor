import Card from '../components/Card';
import NavBar from '../components/NavBar'
import {Box, Flex, Grid, GridItem} from '@chakra-ui/react'
const mainPage = () => {

        return (
            <div>
                <NavBar/>
                <Flex justifyContent="center" width="100%">
                    <Grid width="80%" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                        <GridItem>
                            <Card bg="gray.700"/>
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