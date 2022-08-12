import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack, Circle, Flex,Stack,Icon,Text,Center,Heading} from '@chakra-ui/react'
import {useState} from 'react'
import {FcOk} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import {RiWifiFill,RiWifiOffFill} from 'react-icons'
export default function Card(props) {
        const [isLoaded, setLoading] = useState(false)
        return (
        <Flex mt={20} justifyContent='center'>
          <Box border='1px solid' width={"30vw"} color="black" height='auto' p={6} bg={props.bg} borderRadius='lg'>
            <Stack>
              <SkeletonText isLoaded={props.isLoaded} mt={1} noOfLines={3} spacing={4} p={10}>
              <Heading as="h3" size="lg" mb={"50px"}><Text color={"gray.500"}>{props.name}</Text></Heading>
                <Text color={"gray.500"} fontSize='lg'>{"Contact : "} <Text as="u">{props.contact}</Text></Text>
                <Text color={"gray.500"} fontSize='lg'>{"Running since : "} <Text as="u">{props.uptime + " days"}</Text> </Text>
              </SkeletonText>
              <Flex mt={"50px"} justifyContent="flex-end"><SkeletonCircle isLoaded={props.isLoaded}><Icon as={props.icon} w={10} h={10}></Icon></SkeletonCircle></Flex>
            </Stack>
          </Box>
        </Flex>

        )
}