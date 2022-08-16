import {ChakraProvider} from "@chakra-ui/react";
import Fonts from '../components/Fonts'
import theme from '../components/Theme'
import {useRouter} from 'next/router'
import {useState,useEffect} from 'react';

export function Auth(){
    const router =useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        authCheck(router.asPath);
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }
    }, []);

    function authCheck(url) {
        const publicPaths = ['/','/index',"/forgottenPass", "/mainPage","/signUp"];
        const path = url.split('?')[0];
        if (!publicPaths.includes(path)) {
            setAuthorized(false);
            router.push({
                pathname: '/',
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuthorized(true);
        }
    }
}
export default function App({Component, pageProps}){

    Auth();
    
    return(
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>

    )
}