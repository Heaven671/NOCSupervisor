import Card from '../components/Card';
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2'
import LineChart from '../components/LineChart';
import DoughnutChart from '../components/DoughnutChart';
import MultiLineChart from '../components/MultiLineChart';
import PieChart from '../components/PieChart'
import fetchData from '../components/Data.jsx';
import ModalBox from '../components/ModalBox';
import Bar from 'react-chartjs-2'
import {useState} from 'react';
import {Box, Flex, Grid, GridItem, Select, Stack, Center, Popover,PopoverTrigger,PopoverContent,Text, Button,useDisclosure,Menu,MenuList,MenuItem,MenuButton,MenuGroup,MenuItemOption,MenuOptionGroup,MenuDivider} from '@chakra-ui/react'
import {EditIcon, ChevronDownIcon} from '@chakra-ui/icons'
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


const mainPage = (props) => { 

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
    const [isNetwork, setNetwork] = useState({value: getSessionItem("network", "192.168.3.11")})

    let arr = [];
    let RAMvalues = [];
    const { isOpen, onToggle, onClose } = useDisclosure();
 
    function getSessionItem(key, defaultValue){
        let stored;
        if(typeof window != "undefined"){
           if(window.sessionStorage.getItem(key) !== undefined)
                stored = window.sessionStorage.getItem(key);
           console.log("stored :" + stored)
        }
        if(!stored){
            return defaultValue
        }
        return stored
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
    
    useEffect(function handleSubmit(value) {
        if(typeof window != "undefined")
            window.sessionStorage.setItem("network",value)
        setNetwork({value: value})
        router.push("/mainpage")
    }, [])

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
                                    <Menu>
                                        <MenuButton fontSize="xs" as={Button} rightIcon={<ChevronDownIcon />}>
                                            {isNetwork.value}
                                        </MenuButton>
                                        <MenuList>
                                            <MenuGroup title="192.168.3.0/25">
                                                <MenuDivider/>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.11")}}>192.168.3.11</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.12")}}>192.168.3.12</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.22")}}>192.168.3.22</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.31")}}>192.168.3.31</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.32")}}>192.168.3.32</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.41")}}>192.168.3.41</MenuItem>
                                                <MenuItem onClick={() => {handleSubmit("192.168.3.51")}}>192.168.3.51</MenuItem>
                                            </MenuGroup>
                                            <MenuDivider/>
                                                <MenuGroup title="192.168.21.0/24">
                                                    <MenuDivider/>
                                                    <MenuItem>192.168.21.4</MenuItem>
                                                    <MenuItem>192.168.21.5</MenuItem>
                                                    <MenuItem>192.168.21.14</MenuItem>
                                                    <MenuItem>192.168.21.15</MenuItem>
                                                </MenuGroup>
                                        </MenuList>
                                    </Menu>
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