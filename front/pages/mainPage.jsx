import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import MultiLineChart from '../components/MultiLineChart';
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

Object.size = function(obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };

const mainPage = () => {    
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
    const [isNetwork, setNetwork] = useState({
        value: '192.168.3.11',
    });
    const setValue = useCallback((newValue) => {
        setNetwork((prev) => ({ ...prev, value: newValue }))
      }, [])

    let arr = [];
    const { isOpen, onToggle, onClose } = useDisclosure()

    Auth();

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
            data = Math.ceil(data/8640000)
            setUptime(data)
            setDataLoaded(true)
            setStatus(true);
            ("DAATAAAAA :" + data)
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
          (data);
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
        for(let j = 0; j < 100; ++j)
            avail.push(availMemReal[i].value)
    }
    for(let i = 0; i < Object.size(totMemFree); ++i){
        for(let j = 0; j < 100; ++j)
            memFree.push(totMemFree[i].value)
    }
    for(let i = 0; i < Object.size(totMemReal); ++i){
        for(let j = 0; j < 100; ++j)
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
        console.log("interface in :" + interface_in)
    }

    for(let i = 0; i < Object.size(isData2); ++i){
        interface_out.push(isData2[i].value)
        console.log("interface out :" + interface_out)
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
                                    network={isNetwork.value}>
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
                                    data={diskSpace}
                                    labeldata={diskLabel}
                                    title="Espace en GO"
                                    />
                            </GridItem>
                            <GridItem height="40vh">
                                  <MultiLineChart
                                    data={datasets_mem}
                                    label="Ping"
                                    labeldata={isLabel}
                                    title="ping"
                                    />
                            </GridItem>

                        </Grid>
                    </Center>
                </Flex>
            </>
        )
}

export default mainPage;