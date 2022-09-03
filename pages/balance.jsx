import {Flex, Text} from '@chakra-ui/react';
import axios from 'axios'
const local = require('localStorage')
import { useEffect, useState } from 'react';

export default function index ({usersList}) {

  const email = local.getItem('email');
  const [data, setdata] = useState()

  useEffect(() => {
    // FILTER USER BASED ON EMAIL
    let user = usersList.filter(query => query.email === email);
    setdata(user[0])
  }, [])
  

  return (
    <Flex 
    mt={'10'} 
    bg='#1278cc'
    width='100%'
    alignItems={'center'}
    justifyContent={'center'}
    direction='column'
    height={'100vh'}
    >
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

  const res = await axios.get(
    // 'https://ro-ten.vercel.app/api/userinfo'
    'http://localhost:3000/api/userinfo'
  );
  return{
      props: {
          usersList:res.data,
      }
  }
}