import {Flex,Heading,FormLabel,InputGroup,Input,InputLeftElement,Button} from '@chakra-ui/react'
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import {useState,useEffect} from 'react';
const forgottenPass = () => {
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [email, setEmail] = useState('');
    const isInvalid = password === '' || passwordAgain === '' || email === '';
    const [value, setValue] = useState(false);

    return (
    <Flex height="100vh"  alignItems="center" justifyContent="center">
        <Flex boxShadow="md" width="400px" direction="column" bg={"gray.700"} p={12} rounded={6}>
        <Heading mb={6}>Mot de passe oublié</Heading>
        <FormLabel>Nom de compte</FormLabel>
        <InputGroup>
              <InputLeftElement children={<EmailIcon/>}/>
              <Input value={email} isRequired mb={6} onChange={(e) => { setEmail(e.currentTarget.value)}} placeholder="adresse@mail.com" variant="filled" type="email" />
        </InputGroup>
        <FormLabel>Mot de passe</FormLabel>
        <InputGroup>
              <InputLeftElement children={<LockIcon/>}/>
              <Input value={password} isRequired mb={6} onChange={(e) => { setPassword(e.currentTarget.value)}} placeholder="adresse@mail.com" variant="filled" type="email" />
        </InputGroup>
        <FormLabel>Reentrez votre mot de passe</FormLabel>
        <InputGroup>
              <InputLeftElement children={<LockIcon/>}/>
              <Input value={passwordAgain} isRequired mb={6} onChange={(e) => { setPasswordAgain(e.currentTarget.value)}} placeholder="adresse@mail.com" variant="filled" type="email" />
        </InputGroup>
        <Button disabled={isInvalid} colorScheme="teal" isLoading={value} spinnerPlacement='start' marginBottom={"10px"} loadingText='Connexion en cours' >Demande de mot de passe oublié</Button>
        </Flex>
    </Flex>
    )
}
export default forgottenPass;