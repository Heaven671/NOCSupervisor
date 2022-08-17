import { Box } from "@chakra-ui/react";


export default function Layout(props) {

    return (
        <>
            <Box _hover={{bg:"gray.300"}}>
                {props.children}
            </Box>
        </>
    )
}

