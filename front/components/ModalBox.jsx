import {useState} from 'react';
import {Button,Modal,ModalOverlay,useDisclosure,ModalContent,ModalHeader,ModalCloseButton,ModalBody,ModalFooter,FormControl,FormLabel,Input,Center,Text} from '@chakra-ui/react';
import {EditIcon} from '@chakra-ui/icons'

function ModalBox(props) {
    const { isOpen, onToggle, onClose } = useDisclosure()
    console.log("OOOOOOOOOOOO : "+ props.network)
    const [networkValue, setNetworkValue] = useState({value: props.network});
    console.log("MODALBOX : " + networkValue.value)
    
        return (
            <>
                <Button   
                    rightIcon={<EditIcon />}  
                    onClick={onToggle}>
                    <Text fontSize='xs'>{networkValue.value}</Text>
                </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay/>
                <ModalContent>
                <ModalHeader><Center><Text as='u'>Changer d'adresse réseau</Text></Center></ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    <FormControl>
                    <FormLabel>Adresse réseau</FormLabel>
                    <Input type='tel' isInvalid errorBorderColor='red.300' value={networkValue.value} onChange={(e) => setNetworkValue(e.currentTarget.value)}placeholder='192.168.XXX.XXX' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme='cyan' mr={3} >Valider</Button>
                </ModalFooter>
                </ModalContent>
                </Modal>
            </>
        )
}
export default ModalBox;