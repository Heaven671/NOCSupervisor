import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack, Circle, Flex,Stack} from '@chakra-ui/react'
import {useState} from 'react'
export default function Card(props) {
        const [isLoaded, setLoading] = useState(false)
        return (
        <Flex mt={5} justifyContent='center'>
          <Box border='1px solid' color="black" height='290px' p={6} width='100%' bg={props.bg} borderRadius='lg'>
            <Stack>
              <SkeletonCircle></SkeletonCircle>
              <SkeletonText mt={4} noOfLines={6} spacing={4}/>
            </Stack>
          </Box>
        </Flex>

        )
}