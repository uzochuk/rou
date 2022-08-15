import {Flex, Text, Heading, UnorderedList, ListItem} from '@chakra-ui/react'
import {FiCreditCard, FiSave} from 'react-icons/fi'

const Footer = () => {
  return (
    <Flex bg={'gray.100'} direction='column' alignItems='center' justifyContent='center' color='black'>
      <Text textAlign={'center'} mt='3' width={'60%'} fontWeight='10px'>
        we are here to help you manage your money always.
      </Text>
       
       <Flex mt='3' direction={'column'} >
        <FiCreditCard fontSize={'xx-large'} mt='3'/>
        <Heading fontSize={'medium'} textTransform='uppercase' mt='3'>checking accounts</Heading>
        <Text  mt='3'>Choose the checking account that works best for you. See our Chase Total Checking® offer for new customers. Make purchases with your debit card, and bank from almost anywhere by phone, tablet or computer and 16,000 ATMs and more than 4,700 branches.</Text>
       </Flex>

       <Flex mt='3' direction={'column'} >
        <FiSave fontSize={'xx-large'} mt='3'/>
        <Heading fontSize={'medium'} textTransform='uppercase' mt='3'>saving accounts and CDs</Heading>
        <Text  mt='3'>It’s never too early to begin saving. Open a savings account or open a Certificate of Deposit (see interest rates) and start saving your money.</Text>
       </Flex>

       <Flex mt='3' direction='column' marginBottom={'3'}>
        <Heading fontSize={'medium'} textTransform='uppercase' mt='3'>other products and services</Heading>
        <UnorderedList>
          <ListItem>Online banking</ListItem>
          <ListItem>Mobile banking</ListItem>
          <ListItem>Student center</ListItem>
          <ListItem>Deposit account agreements</ListItem>
        </UnorderedList>
       </Flex>

       
       <Text borderTop={'1px solid black'} mt='4' padding='4' width='100%' textAlign={'center'}> 
        roulettebank&trade; {new Date().getFullYear()}
       </Text>
    </Flex>
  )
}

export default Footer