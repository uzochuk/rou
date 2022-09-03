import { 
  useMediaQuery, 
  Flex, 
  Image, 
  Text, 
  Box
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
      zIndex={'4'}
      boxShadow='0px 5px 10px rgba(0, 0, 5, 0.3)'
      display={router.pathname === '/signup' ?  'none' : '' }

    >

      {
        largeScreen ?

         <Flex 
          direction={'column'}
          justifyContent='flex-start' 
          width='100%' 
          height='120px' 
          padding='2'
          zIndex={'4'}
          >

          {
            router.pathname === '/' ?
              <>
                <Link href='/'>
                 <Image src='/images/logo.png' boxSize='200px' objectFit='contain' mt={'2'} marginLeft={'4'} />
                </Link>
                <Flex marginLeft={'2'} width={'100%'} textTransform='capitalize' fontSize={'large'} fontWeight='hairline' mt={'3'}>
                  <Text>checking & savings</Text>
                  <Text marginLeft={'7'}> credit loans</Text>
                  <Text marginLeft={'7'}>home loans</Text>
                  <Text marginLeft={'7'}>education & goals</Text>
                </Flex>
              </>
              :
              <>
              </>            
          }

        </Flex>:

        // small screen
        <Flex 
         alignItems='center' 
         justifyContent={router.pathname === '/signup' ? 'center' : 'space-between'}  
         width='100%' 
         height='50px' 
         padding='1'>

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