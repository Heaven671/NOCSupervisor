import {ChakraProvider} from "@chakra-ui/react";
import Fonts from '../components/Fonts'
import theme from '../components/Theme'
export default function App({Component, pageProps}){
    return(
        <ChakraProvider theme={theme}>
            <Fonts />
            <Component {...pageProps} />
        </ChakraProvider>

    )
}