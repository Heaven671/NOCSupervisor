import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import MultiLineChart from '../components/MultiLineChart';
import PieChart from '../components/PieChart'
import ModalBox from '../components/ModalBox';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Center, Popover,PopoverTrigger,PopoverContent,Text, Button,useDisclosure,Modal,ModalOverlay,ModalHeader,ModalBody,ModalContent,ModalCloseButton,FormControl,FormLabel,Input,ModalFooter} from '@chakra-ui/react'
import {EditIcon} from '@chakra-ui/icons'
import { useEffect, useCallback } from 'react';
import {FcOk} from 'react-icons/fc'
import {AiOutline} from 'react-icons/ai'
import {Auth} from './_app';
import {Layout} from '../components/Layout'
import { useRouter } from 'next/router';


Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };


const mainPage = () => {    
    const router = useRouter();

    const [showStatus, setStatus] = useState(false)
    const [isName, setName] = useState('')
    const [isContact, setContact] = useState('')
    const [isUptime, setUptime] = useState('')
    const [isData, setData] = useState({})
    const [isData2, setData2] = useState({})
    const [isCPU, setCPU] = useState()
    const [dataLoaded, setDataLoaded] = useState(false)
    const [chartData, setChartData] = useState({})
    const [isDevice, setDevice] = useState('')
    const [isLabel, setLabel] = useState({});
    const [diskSpace, setDiskSpace] = useState({});
    const [diskLabel, setDiskLabel] = useState({});
    const [totMemFree, setTotMemFree] = useState({})
    const [totMemReal, setTotMemReal] = useState({})
    const [availMemReal, setAvailMemReal] = useState({})
    const [isRAMValues, setRAMValues] = useState({})
    const [isNetwork, setNetwork] = useState({
        value: '192.168.3.11',
    });
    const setValue = useCallback((newValue) => {
        setNetwork((prev) => ({ ...prev, value: newValue }))
      }, [])

    let arr = [];
    let RAMvalues = [];
    const { isOpen, onToggle, onClose } = useDisclosure()

    Auth();

    function handleSubmit(){
    

        router.reload(window.location.pathname)
    }
    
    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.1.5.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            setName(data[0].value)
            setDataLoaded(true)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.1.4.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            setContact(data[0].value)
            setDataLoaded(true)
        })
        .catch((e) => {
            console.error(e);
            setName(e)
            setDataLoaded(false)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.1.3.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            console.log("ISUPTIME : " + data[0].value)
            setUptime(data[0].value)
            
            setDataLoaded(true)
            setStatus(true);
        })
        .catch((e) => {
            console.error(e);
            setDataLoaded(false)
            setUptime(e)
            setStatus(false)
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.4.1.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
            if(data[0].value == 1)
                setDevice('Routeur')
            else {
                setDevice('Switch')
            }
        })
        .catch((e) => {
            setDevice(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.2.2.1.16&req=walk&stop=1.3.6.1.2.1.2.2.1.16.200`)
        .then((res) => res.json())
        .then((data) => {
          setData2(data)
        })
        .catch((e) => {
            setData2(e);
            console.error(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.2.2.1.10.10&req=walk&stop=1.3.6.1.2.1.2.2.1.10.200`)
        .then((res) => res.json())
        .then((data) => {
          setData(data)
        })
        .catch((e) => {
            setData(e);
            console.error(e);
        })
    }, [])
    
    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.2.2.1.2&req=walk&stop=1.3.6.1.2.1.2.2.1.2.200`)
        .then((res) => res.json())
        .then((data) => {
          setLabel(data)
        })
        .catch((e) => {
            console.error(e);
            setLabel(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.25.2.3.1.5&req=walk&stop=1.3.6.1.2.1.25.2.3.1.5.70`)
        .then((res) => res.json())
        .then((data) => {
          setDiskSpace(data)
        })
        .catch((e) => {
            console.error(e);
            setDiskSpace(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.2.1.25.2.3.1.6&req=walk&stop=1.3.6.1.2.1.25.2.3.1.6.70`)
        .then((res) => res.json())
        .then((data) => {
          setDiskLabel(data)
        })
        .catch((e) => {
            console.error(e);
            setDiskLabel(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.4.1.2021.4.6.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
          setAvailMemReal(data)
          setRAMValues({"oid": data.oid,
                            "value": data.values
                            })
        })
        .catch((e) => {
            console.error(e);
            setAvailMemReal(e);
        })
    }, [])

    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.4.1.2021.4.5.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
          setTotMemReal(data)
          setRAMValues({"oid": data.oid,
                        "value": data.values
                        })
        })
        .catch((e) => {
            console.error(e);
            setTotMemReal(e);
        })
    }, [])
    useEffect(() => {
        fetch(`/api/snmp?network=${isNetwork.value}&oid=1.3.6.1.4.1.2021.4.11.0&req=get`)
        .then((res) => res.json())
        .then((data) => {
        setTotMemFree(data)
        setRAMValues({"oid": data.oid,
                      "value": data.values
                    })
        })
        .catch((e) => {
            console.error(e);
            setTotMemFree(e);
        })
    }, [])

    // *******************
    // GRAPHE MEMOIRE DATA
    // *******************
    let avail = []
    let memFree = []
    let memReal = []

    for(let i = 0; i < Object.size(availMemReal); ++i){
        avail.push(availMemReal[i].value)
    }
    for(let i = 0; i < Object.size(totMemFree); ++i){
        memFree.push(totMemFree[i].value)
    }
    for(let i = 0; i < Object.size(totMemReal); ++i){
        memReal.push(totMemReal[i].value)
    }
    
    const datasets_mem = [
        {
            data: avail,
            fill: 'origin',
            label: "Mem utiliser",
            borderColor: "rgb(0, 217, 255)",
            backgroundColor: "#8FE3CF"
        },
        {
            data: memFree,
            label: "Mem tot",
            borderColor: "#D61C4E",
            backgroundColor: "#D61C4E"
        },
        {
            data: memReal,
            label: "Mem libre",
            borderColor: "#A66CFF",
            backgroundColor: "#A66CFF"

        }
    ]
    // *********************
    // GRAPHE INTERFACE DATA
    // *********************
    let interface_in = []
    let interface_out = []
    
    for(let i = 0; i < Object.size(isData); ++i){
        interface_in.push(isData[i].value)
    }

    for(let i = 0; i < Object.size(isData2); ++i){
        interface_out.push(isData2[i].value)
    }
    const datasets_interface = [
        {
            data: interface_in,
            label: "IN (Octets)",
            borderColor: "rgb(0, 217, 255)",
            backgroundColor: "rgb(0, 217, 255)"
        },
        {
            data: interface_out,
            label: "OUT (Octets)",
            borderColor: "#D61C4E",
            backgroundColor: "#D61C4E"
        }
    ]
        return (
            <>
                <NavBar2/>
                <Flex justifyContent="center" ml={0} width="auto">
                    <Center>
                        <Grid p={50} width="auto" maxHeight="300px" templateColumns='repeat(2, 1fr)' gap='5'>
                            <GridItem>
                                <Card bg="gray.700" 
                                    isLoaded={dataLoaded}
                                    name={isName}
                                    contact={isContact}
                                    uptime={isUptime}
                                    devicetype={isDevice}
                                    icon={showStatus ? FcOk : AiOutline}
                                    >
                                    <Button   
                                        rightIcon={<EditIcon />}  
                                        onClick={onToggle}>
                                        <Text fontSize='xs'>{isNetwork.value}</Text>
                                    </Button>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay/>
                                    <ModalContent>
                                    <ModalHeader><Center><Text as='u'>Changer d'adresse réseau</Text></Center></ModalHeader>
                                    <ModalCloseButton/>
                                    <ModalBody>
                                        <FormControl>
                                        <FormLabel>Adresse réseau</FormLabel>
                                        <Input type='tel' isInvalid errorBorderColor='red.300' value={isNetwork.value} onChange={(e) => {setNetwork(e.target.value)}} placeholder='192.168.XXX.XXX' />
                                        </FormControl>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button onClick={handleSubmit} colorScheme='cyan' mr={3} >Valider</Button>
                                    </ModalFooter>
                                    </ModalContent>
                                    </Modal>
                                </Card>
                            </GridItem>
                            <GridItem mt="100px" w="600px" height="40vh">
                                <MultiLineChart 
                                    data={datasets_interface}
                                    label="Octets / interfaces"
                                    labeldata={isLabel}
                                    title="Interfaces"
                                />
                            </GridItem>
                            <GridItem height="40vh">
                                <DoughnutChart
                                    options={1}
                                    data={diskSpace}
                                    labeldata={diskLabel}
                                    title="Espace en Go"
                                    bg={[
                                        '#002B5B',
                                        '#2B4865',
                                        '#256D85',
                                        '#8FE3CF'
                                      ]}
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                  <PieChart
                                    options={0}
                                    data={totMemFree}
                                    data2={totMemReal}
                                    data3={availMemReal}
                                    labeldata={["Memoire libre","Mémoire utilisé","Mémoire totale"]}
                                    title="RAM en Go"
                                    bg = {[
                                        '#A66CFF',
                                        '#9C9EFE',
                                        '#B1E1FF'
                                    ]}
                                    />
                            </GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;