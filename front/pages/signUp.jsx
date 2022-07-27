import { Button, Flex, Heading, Input, useColorMode, useColorModeValue, IconButton, FormControl, FormHelperText, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import {SunIcon, MoonIcon} from '@chakra-ui/icons';
import {useState} from 'react';
import {useRouter} from 'next/router';
import LoginForm from '../components/LoginForm';

const signUpPage = () => {
    return (
        <LoginForm/>
    )
}

export default signUpPage