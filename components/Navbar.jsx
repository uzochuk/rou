import { 
  useMediaQuery, 
  Flex, 
  Image, 
  Text, 
}from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Sidebar from './Sidebar'



const Navbar = () => {
  const [largeScreen] = useMediaQuery('(min-width : 768px)')
  const router = useRouter()

  return (
    <Flex    
      bg='white'
      color='black' 
      as='header' 
      position='fixed' 
      width='100vw' 
      left='0' 
      top='0' 
      right='0' 
      zIndex='1'
      boxShadow='0px 5px 10px rgba(0, 0, 5, 0.3)'
    >

      {
        largeScreen ?
        <Flex>
         
        </Flex>:

        <Flex  alignItems='center' justifyContent='space-between'  width='100%' height='50px' padding='1'>

          {
            router.pathname === '/' ?
              <>
                <Link href='/'>
                 <Image src='/images/logo.png' boxSize='100px' objectFit='contain' />
                </Link>
                <Link href='/login'>
                  <Text  fontSize='small' fontWeight={'black'}>Sign In</Text>
                </Link> 
              </>
              :
              <>
                {
                  router.pathname === '/signup' ? 
                    <></>
                    :
                    <Sidebar/>
                }
                <Link href='/'>
                 <Image src='/images/logo.png' boxSize='100px' objectFit='contain' />
                </Link>
              </>            
          }


        </Flex>
      }

    
    </Flex>
      
  )
}

export default Navbar