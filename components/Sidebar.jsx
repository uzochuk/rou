import {Flex, Text, Divider, IconButton, useDisclosure, ScaleFade, Box } from '@chakra-ui/react'
import {FiMenu, FiHome, FiLogOut, FiDollarSign, FiSettings} from 'react-icons/fi'
import { FaFileInvoice, FaCreditCard, FaHistory } from 'react-icons/fa'
import { useRouter } from 'next/router'
import Link from 'next/link' 

const Sidebar = () => {
  const {isOpen, onToggle} = useDisclosure()
  const router = useRouter()

  return (
    <>
      <IconButton icon={<FiMenu/>}  onClick={onToggle}   zIndex={1}/>
      <ScaleFade initialScale={0.9} in={isOpen}>
      <Flex
        marginBlockStart={'-10px'}
        boxShadow='0 4px 18px 0 rgba(0, 0, 0, 0.15)' 
        w='50vw'
        flexDir='column'
        marginLeft={'-100px'}
        paddingLeft="5px"
        bg='white'
        mt={'456px'}
        paddingBottom={'10px'}
        display={router.pathname === '/login' ? 'none' : 'show'}
      >  

      <Flex direction={'column'} mt={'100px'}>

        <Link href='/dashboard' >
            <Flex padding={'4'} color='#1278cc'>
                < FiHome/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Dashboard</Text>
            </Flex>
        </Link>

        <Link href='/balance'>
            <Flex padding={'4'} color='#1278cc'>
                < FiDollarSign/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Balance</Text>
            </Flex>
        </Link>

        <Link href='/invoice'>
            <Flex padding={'4'} color='#1278cc'>
                <FaFileInvoice/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Invoice</Text>
            </Flex>
        </Link>

        <Link href='/cards'>
            <Flex padding={'4'} color='#1278cc'>
                <FaCreditCard/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Cards</Text>
            </Flex>
        </Link>

        <Link href='/history'>
            <Flex padding={'4'} color='#1278cc'>
                <FaHistory/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Transactions</Text>
            </Flex>
        </Link>

        <Link href='/settings'>
            <Flex padding={'4'} color='#1278cc'>
                <FiSettings/> <Text fontSize={'small'} color='black' marginLeft={'2'} marginBottom={'2'}>Settings</Text>
            </Flex>
        </Link>

        <IconButton icon={<FiLogOut/>} bg='red' color='white'/>
      </Flex> 

      </Flex>

              
      </ScaleFade>
    </>  
    
  )
}

export default Sidebar