import {Box,Skeleton,SkeletonText,SkeletonCircle,VStack, Circle, Flex,Stack, Text} from '@chakra-ui/react'
import {useState} from 'react'
export default function Card(props) {
        
        return (
        <Flex mt={5} justifyContent='center'>
          <Box border='1px solid' color="black" height='290px' p={6} width='100%' bg={props.bg} borderRadius='lg'>
            <Stack>
              <SkeletonCircle></SkeletonCircle>

              <SkeletonText isLoaded fadeDuration={10} mt={4} noOfLines={2} spacing={4}>
                <Text color={"gray.500"} fontSize='xs'>{"Equipement : " + props.name}</Text>
                <Text color={"gray.500"} fontSize='xs'>{"Contact : " + props.contact}</Text>
                <Text color={"gray.500"} fontSize='xs'>{"Running since : " + props.uptime + " days"}</Text>
              </SkeletonText>
              <SkeletonCircle></SkeletonCircle>
            </Stack>
          </Box>
        </Flex>

        )
}