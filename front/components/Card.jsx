import {Box,Skeleton,SkeletonText,SkeletonCircle,FormControl,FormLabel,Input,VStack,HStack,Button,useDisclosure, Circle, Flex,Stack,Icon,Text,Center,Heading,Tag,TagLabel,Badge,Popover,PopoverTrigger, Modal, ModalOverlay, ModalContent,ModalHeader, ModalCloseButton, ModalBody, ModalFooter, NumberInput, NumberInputField} from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import {useState} from 'react'
import {FcOk} from 'react-icons/fc'
import {AiOutlineClose} from 'react-icons/ai'
import {RiWifiFill,RiWifiOffFill} from 'react-icons'
import ModalBox from './ModalBox'

const Card = (props) => {
        const [isLoaded, setLoading] = useState(false)
        let hours, minutes, seconds, days;
        let name = [];
        let ticks = props.uptime;
        days = Math.ceil(((((ticks/60)/60)/24)/100))
        hours = (ticks/ 360000)%24
        minutes = Math.ceil((ticks / 6000)%60)
        seconds = Math.ceil((ticks/ 100)%60)

          return (

          <Flex mt={20} flexDir="flex-end">
            <Box border='1px solid' borderColor="black" width={"30vw"} font="white" height='auto' p={6} bg={props.bg} borderRadius='lg'>
            <HStack spacing='60%'>
                <Tag w="auto">
                      <TagLabel>{props.devicetype}</TagLabel>
                  </Tag>
                    {props.children}
              </HStack>
              <Stack>
                <SkeletonText isLoaded={props.isLoaded} mt={1} noOfLines={4} spacing={4} p={10}>
                  <Heading as="h3" size="lg" mb={"50px"} color="gray.500">{props.name}</Heading>
                    <Text color={"gray.500"} fontSize='lg'>Contact : <Text as="u">{props.contact}</Text></Text>
                    <Text color={"gray.500"} fontSize='lg'>Running since : <Text as="u">{days + " days " + `(${Math.ceil(hours)}h:${minutes}m:${seconds}s)`}</Text></Text>
                </SkeletonText>
                <Flex mt={"50px"} justifyContent="flex-end"><HStack><Badge ml="5px">En ligne</Badge><SkeletonCircle isLoaded={props.isLoaded}><Icon as={props.icon} w={10} h={10}></Icon></SkeletonCircle></HStack></Flex>
              </Stack>
            </Box>
          </Flex>
          )
}
export default Card;