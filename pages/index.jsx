import {Flex, Box} from '@chakra-ui/react'
import Footer from '../components/Footer'
import MidContent from '../components/MidContent'


export default function Home() {

  return (
      <Flex 
        flexDir='column' 
        marginTop='10vh' 
        justifyContent='center'
        alignItems='center'
        width='100%'
        bg='white'
      >
        <MidContent/>
        <Footer/>
      </Flex> 

  
  )
}
