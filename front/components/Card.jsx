import {Box,Skeleton,VStack,Flex,Stack} from '@chakra-ui/react'
export default function Layout() {


        return (
        <Flex justifyContent='center'>
          <Box border='1px solid' color="black" height='290px' p={6} width='100%' bg="gray.500" borderRadius='lg'>
            <Stack>
              <Skeleton height='20px' width='50px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <span></span>
              <span></span>
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
              <Skeleton height='20px' />
            </Stack>
          </Box>
        </Flex>

        )
}