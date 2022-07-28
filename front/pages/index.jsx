import { Button, Flex, Heading,VStack, Input, InputLeftElement, InputGroup, useColorMode, FormLabel, useColorModeValue, IconButton, FormControl, FormHelperText, FormErrorMessage, InputRightElement} from '@chakra-ui/react';
import {SunIcon,LockIcon,EmailIcon,Icon, MoonIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import ThemeToggler from '../components/ThemeToggler'


const logInPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = useState(false);
  const [click, setClickValue] = useState(false);
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [input, setInput] = useState('');
  const isError = input === ''
  const isInvalid = password === '' || email === '';
  const router = useRouter();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  }
  const handleSubmit = async (event) => {
    event.preventDefault
    setValue(true)
    event.preventDefault;
    let response = fetch('/api/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: email, pass: password })
    })
    console.log(response)
    response.then(() => {
      alert('yay')
      router.push("/mainPage")
    })
  }
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex boxShadow="lg" direction="column" background={formBackground} p={12} rounded={6}>
        <ThemeToggler></ThemeToggler>
          <Heading mb={6}>Connexion</Heading>
          <FormLabel>Adresse mail</FormLabel>
            <InputGroup>
              <InputLeftElement children={<EmailIcon/>}/>
              <Input value={email} isRequired mb={6} onChange={(e) => { setEmail(e.currentTarget.value)}} placeholder="adresse@mail.com" variant="filled" type="email" />
            </InputGroup>
          <FormLabel>Mot de passe</FormLabel>
            <InputGroup>
              <InputLeftElement children={<LockIcon/>}/>
              <InputRightElement width="2.5rem">
                <Button 
                  height="1.75rem" 
                  size='sm' 
                  onClick={() => {setShowPassword(!showPassword)}}
                />
              </InputRightElement>
              <Input value={password} isRequired onChange={(e) => { setPassword(e.currentTarget.value)}} placeholder="*******" variant="filled" mb={6} type={showPassword ? 'text' : 'password'} />
            </InputGroup>
          <Button disabled={isInvalid} colorScheme="teal" isLoading={value} spinnerPlacement='start' marginBottom={"10px"} loadingText='Connexion en cours' onClick={handleSubmit} >Connexion</Button>
          <Button variant="outline" maxWidth="500px" colorScheme="teal" onClick={() => {router.push("/signUp") }}>Inscription</Button>
        </Flex>
    </Flex>
  )
}

export default logInPage