import React,{useEffect, useState} from 'react'
import { useMediaQuery, Flex, Button, Text, Link, Container, Heading, Image, Divider}  from '@chakra-ui/react'
import {FaReceipt, FaWallet, FaDollarSign, FaCreditCard, FaLock} from 'react-icons/fa'
import axios from 'axios'

const MidContent = () => {
  const [largeScreen] = useMediaQuery('(min-width : 768px)')
  const [data, setdata] = useState({})

	const callAPI = async () => {

    try {
      const res = await axios.get('https://reuters-business-and-financial-news.p.rapidapi.com/category-id/8/article-date/11-04-2021',
        {  params: {'category-id': '8', ArticleDate: '11-04-2021'},
          headers: {
            'X-RapidAPI-Key': '5bdad8f2dfmsh34704c138307303p1df871jsn538b24a23f7f',
            'X-RapidAPI-Host': 'reuters-business-and-financial-news.p.rapidapi.com'
        }}
      )
      setdata(res.data)
    } catch (error) {
      console.log(error)
    }

	};


  useEffect(() => {
   callAPI()
  }, [])
  

  return (
    <>

      {
        largeScreen ?
        <Flex>
         
        </Flex>:
        <>
        <Flex direction='column' alignItems='center' justifyContent='center' bg='#1278CC' color='white' paddingBottom={'2'}>

            <Flex>

              <Flex direction='column' marginLeft='2' marginTop='7'>
                <Text  fontSize='small'>Enjoy</Text>
                <Flex alignItems={'center'}><Text>$</Text><Text fontSize='25px' fontWeight='bolder'>150</Text></Flex>
              </Flex>

              <Flex direction='column' marginLeft='9' width='50%' textAlign={'start'}>
                <Text fontSize={'small'} fontWeight={'medium'} mt={'4'}>New Roulette checking customers</Text>
                <Text mt={'2'}  fontSize={'x-small'} fontWeight={'hairline'}>
                  Open a roulette&trade; account today and set up direct deposit.
                </Text>
                <Link href="/signup">
                  <Button colorScheme={'green'} mt={'1'} href='/signup'>open an account</Button>
                </Link>
              </Flex>

            </Flex>

          </Flex>

          <Flex flexWrap='wrap' justifyContent='space-between' width='90%' mt={'4'}>
         
            <Link display={'flex'} flexDirection={'column'} alignItems='center' justifyContent='center'  href="/signup" >
              <FaReceipt fontSize={'large'}/>
              <Text fontSize={'small'}>Checking</Text>
            </Link>

            <Link display={'flex'} flexDirection={'column'} alignItems='center' justifyContent='center'  href="/signup">
              <FaDollarSign fontSize={'large'}/>
              <Text fontSize={'small'}>Investment</Text>
            </Link>

            <Link display={'flex'} flexDirection={'column'} alignItems='center' justifyContent='center'  href="/signup">
              <FaWallet fontSize={'large'}/>
              <Text fontSize={'small'}>Savings</Text>
            </Link>

            <Link display={'flex'} flexDirection={'column'} alignItems='center' justifyContent='center' href="/signup">
              <FaCreditCard fontSize={'large'}/>
              <Text fontSize={'small'}>Business</Text>
            </Link>

        </Flex>

        <Container>

          <Flex direction={'column'} marginTop={'5'} bg='gray.100' paddingBottom={'3'}>
            <Flex justifyContent={'space-between'} width='100%' color='white' bg='#1278CC' padding='2' paddingTop={'4'}>
              <Text fontWeight={'bolder'} width='70px'>Business Checking</Text>
              <FaReceipt  fontSize={'xx-large'}/>
            </Flex>
            <Flex direction={'column'} alignItems='flex-start' justifyContent={'center'} paddingLeft='1' mt={'2'}>
              <Text textTransform={'capitalize'} width='60%' fontWeight={'bolder'}>earn $200 with Business complete checking</Text>
              <Text mt={'2'}>
                plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                <br/> 
                <i>Quality activities apply.</i>
              </Text>
              <Link href="/signup">
               <Button colorScheme={'green'} mt={'2'} >open an account</Button>
              </Link>
            </Flex>
          </Flex>

          <Flex direction={'column'} marginTop={'5'} bg='gray.100' paddingBottom={'3'}>
            <Flex justifyContent={'space-between'} width='100%' color='white' bg='#1278CC' padding='2' paddingTop={'4'}>
              <Text fontWeight={'bolder'}>Roulette&trade; Secure Banking</Text>
              <FaLock  fontSize={'xx-large'}/>
            </Flex>
            <Flex direction={'column'} alignItems='flex-start' justifyContent={'center'} paddingLeft='1' mt={'2'}>
              <Text textTransform={'capitalize'} width='60%' fontWeight={'bolder'}>earn $200 with Business complete checking</Text>
              <Text mt={'2'}>
                plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                <br/> 
                <i>Qualitfying activities apply.</i>
              </Text>
              <Link href='/signup'>
                <Button colorScheme={'green'} mt={'2'} >open an account</Button>
              </Link>
            </Flex>
          </Flex>
          
        </Container>


        <Flex margin='2' mt={'4'} direction='column'>
          <Heading as='h6' textTransform='capitalize' fontWeight={'hairline'}>explore buisiness news and resources</Heading>

            {
              // console.log(data.length)
              data.length > 0 ?
              data.map((item)=>(
                <>
                  <Divider key='1'/>
                    <Link key='3' href={item.urlSupplier} mt={'2'}>
                      <Flex flexWrap='wrap' justifyContent='space-around' width='100%' paddingBottom={2}>
                        <Image  src={item.files[0] ? item.files[0].urlCdn : '/images/background.jpg'} boxSize='100px' objectFit='contain'/>
                        <Text width={'70%'} fontSize='small'>
                          {item.articlesShortDescription}
                        </Text>
                      </Flex>
                    </Link>
                  <Divider key='2'/>
                </>
              )):<></>
            }
        </Flex>
        
       </>  
      }

    </>
  )
}

export default MidContent