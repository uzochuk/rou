import axios from 'axios';
import { Divider, Flex,Text } from '@chakra-ui/react';
const local = require('localStorage')
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function index ({usersList}){
  const email = local.getItem('email');
  const [data, setdata] = useState()

  useEffect(() => {
    // FILTER USER BASED ON EMAIL
    let user = usersList.filter(query => query.email === email);
    setdata(user[0])
  }, [])
  

  return (
    <Flex  
      mt={'5'} 
      paddingBottom='20px'
      bg='#1278cc'
      width='100%'
      marginTop='-3px'
      alignItems={'center'}
      justifyContent={'center'}
      direction='column'
    >
      <Text textTransform='capitalize' mt={20} color='white' fontWeight={'hairline'}>hello, {data?.firstname}</Text>
      <Flex 
        direction={'column'}
        bg='white' 
        color={'black'} 
        mt={4} 
        boxShadow= '-2px 3px 13px 6px rgba(0,0,0,0.08) inset'
        borderRadius={'10'} 
        width='80%' 
        padding={'2'}
        >

        <Flex alignSelf={'flex-end'}>
          <Text color='grey' fontSize='smaller' textTransform={'uppercase'}>Roulette Savings</Text>
        </Flex>

        <Flex direction='column'>
          <Text fontSize='xx-small' color='grey'>Available balance</Text>
          <Text fontSize='large' fontWeight='light'>${data?.savings}</Text>
        </Flex>

        <Flex alignSelf={'flex-end'}>
          <Text>
           <code>**** **** **** ****</code>
          </Text>
        </Flex>

        <Divider mt={'3'} />

        <Flex justifyContent={'space-around'} width='100%' mt={'1'} fontSize='smaller'>
          <Link href={''} >
            <Text color='#1278cc'>Pay</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>Transfer</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>...</Text>
          </Link>
        </Flex>

      </Flex>

      <Flex 
       direction={'column'}
       bg='white' 
       color={'black'} 
       mt={4} 
       boxShadow= '-2px 3px 13px 6px rgba(0,0,0,0.08) inset'
       borderRadius={'10'} 
       width='80%' 
       padding={'2'}
        >

        <Flex alignSelf={'flex-end'}>
          <Text color='grey' fontSize='smaller' textTransform={'uppercase'}>Roulette Checking</Text>
        </Flex>

        <Flex direction='column'>
          <Text fontSize='xx-small' color='grey'>Available balance</Text>
          <Text fontSize='large' fontWeight='light'>${data?.current}</Text>
        </Flex>

        <Flex alignSelf={'flex-end'}>
          <Text>
           <code>**** **** **** ****</code>
          </Text>
        </Flex>

        <Divider mt={'3'} />

        <Flex justifyContent={'space-around'} width='100%' mt={'1'} fontSize='smaller'>
          <Link href={''} >
            <Text color='#1278cc'>Pay</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>Transfer</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>...</Text>
          </Link>
        </Flex>
        
      </Flex>


      <Flex 
       direction={'column'}
       bg='white' 
       color={'black'} 
       mt={4} 
       boxShadow= '-2px 3px 13px 6px rgba(0,0,0,0.08) inset'
       borderRadius={'10'} 
       width='80%' 
       padding={'2'}
        >

        <Flex alignSelf={'flex-end'}>
          <Text color='grey' fontSize='smaller' textTransform={'uppercase'}>Roulette Business</Text>
        </Flex>

        <Flex direction='column'>
          <Text fontSize='xx-small' color='grey'>Available balance</Text>
          <Text fontSize='large' fontWeight='light'>${data?.business}</Text>
        </Flex>

        <Flex alignSelf={'flex-end'}>
          <Text>
            <code>**** **** **** ****</code>
          </Text>
        </Flex>

        <Divider mt={'3'} />

        <Flex justifyContent={'space-around'} width='100%' mt={'1'} fontSize='smaller'>
          <Link href={''} >
            <Text color='#1278cc'>Pay</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>Transfer</Text>
          </Link> | 
          <Link href={''} >
            <Text color='#1278cc'>...</Text>
          </Link>
        </Flex>
        
      </Flex>

      <Flex mt='4' width='100%' bg='white' marginBottom='-5' padding={'2'}>
        <Text textAlign={'center'}  width='100%' > 
          roulettebank&trade; {new Date().getFullYear()}
        </Text>
      </Flex>  
    </Flex>
  )
}

export  const getServerSideProps = async (ctx) =>{
  const Cookie = ctx.req.cookies || ''

  if (Cookie.token !== '62cde0eed153fa9819825a69djkdkaka') {
      return{
          redirect: {
              destination: "/",
              permanent: false,
          }
      }
  }

  const res = await axios.get('https://ro-ten.vercel.app/api/userinfo');
  return{
      props: {
          usersList:res.data,
      }
  }
}