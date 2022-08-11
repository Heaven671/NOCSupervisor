import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack, Circle, Flex,Stack,Icon,Text,Center} from '@chakra-ui/react'
import {useState} from 'react'
import {RiWifiFill,RiWifiOffFill} from 'react-icons'
export default function Card(props) {
        const [isLoaded, setLoading] = useState(false)
        return (
        <Flex mt={20} justifyContent='center'>
          <Box border='1px solid' width={"30vw"} color="black" height='400px' p={6} bg={props.bg} borderRadius='lg'>
            <Stack>
              <SkeletonCircle {...props.isLoaded}></SkeletonCircle>
              <SkeletonText isLoaded mt={4} noOfLines={6} spacing={40} p={10}>
                <Text color={"gray.500"} fontSize='lg'>{"Equipement : " + props.name}</Text>
                <Text color={"gray.500"} fontSize='lg'>{"Contact : " + props.contact}</Text>
                <Text color={"gray.500"} fontSize='lg'>{"Running since : " + props.uptime + " days"}</Text>
              </SkeletonText>
            </Stack>
          </Box>
        </Flex>

        )
}