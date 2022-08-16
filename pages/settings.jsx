import axios from 'axios';
import { Divider, Flex,Text } from '@chakra-ui/react';
const local = require('localStorage')
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
      mt={'10'} 
      paddingBottom='20px'
      bg='#1278cc'
      width='100%'
      marginTop='-3px'
      alignItems={'center'}
      justifyContent={'center'}
      direction='column'
      height='100vh'
    >
      <Flex 
        direction={'column'}
        bg='white' 
        color={'black'} 
        mt={4} 
        boxShadow= '-2px 3px 13px 6px rgba(0,0,0,0.08) inset'
        borderRadius={'10'} 
        width='auto' 
        padding={'2'}
        >

        <Flex alignSelf={'flex-end'}>
          <Text fontWeight='black' fontSize='medium' textTransform={'uppercase'} textAlign='center'>
            {data?.firstname + ' ' + data?.middlename + ' ' + data?.lastname}
          </Text>
        </Flex>
        <Divider/>

        <Flex direction='column' mt={'4'}>
          <Text fontSize='medium' color='black' textTransform={'capitalize'}>account number</Text>
          <Text fontSize='large' fontWeight='black'>{data?.accountnumber}</Text>
        </Flex>
        <Divider/>

        <Flex direction='column' mt={'4'}>
          <Text fontSize='medium' color='black' textTransform={'capitalize'}>routing number</Text>
          <Text fontSize='large' fontWeight='black'>{data?.routingnumber}</Text>
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

  const res = await axios.get('https://ro-ten.vercel.app/api/userinfo');
  return{
      props: {
          usersList:res.data,
      }
  }
}