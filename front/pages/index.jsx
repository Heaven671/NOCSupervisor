import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, IconButton, FormControl, FormHelperText, FormErrorMessage} from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';


const logInPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = useState(false);
  const [click, setClickValue] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [input, setInput] = useState('');
  const isError = input === ''
  const router = useRouter();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <FormControl isRequired alignItems ="center" justifyContent="center" flexDirection="flex" alignSelf="center" width={350} isInvalid={isError}>
        <Flex boxShadow="lg" direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Log In</Heading>
          <Input onChange={(e) => { setEmail(e.currentTarget.value)}} placeholder="aezeae@chakra-ui.com" variant="filled" mb={3} type="email" />
          <Input onChange={(e)=>{ setPassword(e.currentTarget.value)}} placeholder="*******" variant="filled" mb={6} type="password" /> {isError ? (<FormHelperText>Entrez vos identifiants</FormHelperText>) : (<FormErrorMessage> Email is required </FormErrorMessage>) }
          <Button colorScheme="teal" isLoading={value} onClick={(e) => { 
            e.preventDefault;
            fetch('/api/signIn', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({mail: email, pass: password })
            })
          }} >Log in</Button>
         <Button variant="outline" maxWidth="500px" colorScheme="teal" isLoading={value} onClick={(e) => {router.push("/signUp") }}></Button>
        </Flex>
      </FormControl>
    </Flex>
  )
}

export default logInPage