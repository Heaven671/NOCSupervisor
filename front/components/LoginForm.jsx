import { Button, Flex, Heading, Input, InputLeftElement, useToast, Show, InputGroup, Box, useColorMode, useColorModeValue, IconButton, FormControl, FormHelperText, FormLabel, FormErrorMessage, VStack } from '@chakra-ui/react';
import { EmailIcon,LockIcon, MoonIcon, SunIcon} from '@chakra-ui/icons'
import {useState} from 'react';
import {useRouter} from 'next/router';
import ThemeToggler from './ThemeToggler';


export default function LoginForm(){

  const { colorMode, toggleColorMode } = useColorMode()
  const formBackground = useColorModeValue("gray.100", "gray.700")
  const [value, setValue] = useState(false);
  const [click, setClickValue] = useState(false);
  const [input, setInput] = useState('');
  const isError = input === ''
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isInvalid = password === '' || email === '';
  const toast = useToast();
  const handleSubmit = async (event) => {
    setValue(true);
    event.preventDefault;

    let response = await fetch('/api/signUp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({mail: email, pass: password })
    })
    .then(()=>{
      toast({
        title: 'Inscription réussie.',
        description: "Veuillez vous connecter.",
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
      setValue(false);
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
        <Flex height="60vh" alignItems="center" justifyContent="center" mt={100}>
          <Flex boxShadow="lg" mt={50} direction="column" background={formBackground} p={10} rounded={6}>
          <ThemeToggler></ThemeToggler>
            <FormControl>
            <Heading mb={6}>Inscription</Heading>
            <FormLabel>Entrez votre adresse mail</FormLabel>
            <InputGroup>
              <InputLeftElement children={<EmailIcon/>}/>
              <Input value={email} isRequired onChange={(e) => setEmail(e.currentTarget.value)} placeholder="adresse@mail.com" variant="filled" mb={3} type="email" />
            </InputGroup>
            <FormLabel>Confirmez votre adresse mail</FormLabel>
            <InputGroup>
              <InputLeftElement children={<EmailIcon/>}/>
              <Input isRequired value={email} onChange={(e) => setEmail(e.currentTarget.value)} placeholder="adresse@mail.com" variant="filled" mb={3} type="email" />
            </InputGroup>
            <FormLabel>Entrez votre mot de passe</FormLabel>
            <InputGroup>
              <InputLeftElement children={<LockIcon/>}/>
              <Input isRequired value={password} onChange={(e) => setPassword(e.currentTarget.value)} placeholder="*******" variant="filled" mb={5} type="password" />
            </InputGroup>
            </FormControl>
              <Button disabled={isInvalid} type="submit" marginBottom={"10px"} colorScheme="teal" isLoading={value} onClick={handleSubmit}>Inscription</Button>
              <Button colorScheme="teal" variant="outline" onClick={(e) => {router.push("/")} }>Déjà inscrit ?</Button>
          </Flex>
        </Flex>
    );
}