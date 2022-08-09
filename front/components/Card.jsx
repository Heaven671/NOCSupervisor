import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack, Circle, Flex,Stack,Icon,Text} from '@chakra-ui/react'
import {useState} from 'react'
import {RiWifiFill,RiWifiOffFill} from 'react-icons'
export default function Card(props) {
        const [isLoaded, setLoading] = useState(false)
        return (
        <Flex mt={5} justifyContent='center'>
          <Box border='1px solid' color="black" height='290px' p={6} width='100%' bg={props.bg} borderRadius='lg'>
            <Stack>
              <SkeletonCircle {...props.isLoaded}></SkeletonCircle>
              <SkeletonText isLoaded mt={4} noOfLines={6} spacing={4}>
              <Text color={"gray.500"} fontSize='xs'>{"Equipement : " + props.name}</Text>
                <Text color={"gray.500"} fontSize='xs'>{"Contact : " + props.contact}</Text>
                <Text color={"gray.500"} fontSize='xs'>{"Running since : " + props.uptime + " days"}</Text>
              </SkeletonText>
            </Stack>
          </Box>
        </Flex>

        )
}