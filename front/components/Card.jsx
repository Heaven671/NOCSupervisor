import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack,HStack, Circle, Flex,Stack,Icon,Text,Center,Heading,Tag,TagLabel,Badge} from '@chakra-ui/react'
import {useState} from 'react'
import {FcOk} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import {RiWifiFill,RiWifiOffFill} from 'react-icons'

const Card = (props) => {
        const [isLoaded, setLoading] = useState(false)
        let hours, minutes, seconds;
        let name = [];
        console.log("UPTIME" + props.uptime)
        hours = Math.ceil((props.uptime / 360000))
        minutes = Math.ceil((props.uptime / 6000))
        seconds = Math.ceil((props.uptime / 100))


        return (
        <Flex mt={20} justifyContent='center'>
          <Box border='1px solid' width={"30vw"} color="black" height='auto' p={6} bg={props.bg} borderRadius='lg'>
          <Tag w="auto">
                <TagLabel>{props.devicetype}</TagLabel>
            </Tag>
            <Stack>
              <SkeletonText isLoaded={props.isLoaded} mt={1} noOfLines={4} spacing={4} p={10}>
                <Heading as="h3" size="lg" mb={"50px"} color="gray.500">{props.name}</Heading>
                  <Text color={"gray.500"} fontSize='lg'>Contact : <Text as="u">{props.contact}</Text></Text>
                  <Text color={"gray.500"} fontSize='lg'>Running since : <Text as="u">{props.uptime + " days " + `(${hours}h:${minutes}m:${seconds}s)`}</Text></Text>
              </SkeletonText>
              <Flex mt={"50px"} justifyContent="flex-end"><HStack><Badge ml="5px">En ligne</Badge><SkeletonCircle isLoaded={props.isLoaded}><Icon as={props.icon} w={10} h={10}></Icon></SkeletonCircle></HStack></Flex>
            </Stack>
          </Box>
        </Flex>
        )
}
export default Card;