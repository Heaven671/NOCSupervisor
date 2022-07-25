import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, IconButton, FormControl, FormHelperText, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import {useRouter} from 'next/router';

const signUpPage = () => {
  const { toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = useState(false);
  const [click, setClickValue] = useState(false);
  const [input, setInput] = useState('');
  const isError = input === ''
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault;
    let domain = window.location.origin
    domain = domain.slice(0,16);
    console.log(domain)
    let port = 8080;
    let url = `/api/signUp`;
    await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        /*'Access-Control-Allow-Origin': 'http://localhost:8080'*/
      },
      /*mode: 'no-cors',*/
      body: JSON.stringify({mail: email, pass: password })
    })
    .catch((e) => {
      console.log('error: ');
      console.log(e);
    })
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  }

    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
          <form method="POST" action="http://localhost:8080/api/signUp" onSubmit={handleSubmit}>
            <FormControl isRequired alignItems ="center" justifyContent="center" flexDirection="flex" alignSelf="center" width={350} isInvalid={isError}>
              <Flex boxShadow="lg" direction="column" background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Inscription</Heading>
                <FormLabel>Entrez votre adresse mail</FormLabel>
                <Input placeholder="aezeae@chakra-ui.com" variant="filled" mb={3} type="email" />
                <FormLabel>Confirmez votre adresse mail</FormLabel>
                <Input onChange={e => setEmail(e.currentTarget.value)} placeholder="aezeae@chakra-ui.com" variant="filled" mb={3} type="email" />
                <FormLabel>Entrez votre mot de passe</FormLabel>
                <Input onChange={e => setPassword(e.currentTarget.value)} placeholder="*******" variant="filled" mb={6} type="password" /> {isError ? (<FormHelperText>Entrez vos identifiants</FormHelperText>) : (<FormErrorMessage> Email is required </FormErrorMessage>) }
                <Button type="submit" colorScheme="teal" isLoading={value} >Inscription</Button>
                <IconButton onClick={toggleColorMode} icon={() => { click === false ? <SunIcon/> : () => {setClickValue(!click), <MoonIcon/> }}}/>
              </Flex>
            </FormControl>
          </form>
      </Flex>
    )
}

export default signUpPage