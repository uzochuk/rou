import React,{useEffect, useState} from 'react'
import {FiKey} from 'react-icons/fi'
import {useRouter} from 'next/router'
const local = require('localStorage')
import { 
        useMediaQuery, 
        Flex,  
        Link, 
        Container, 
        Heading, 
        Image,
        Divider,  
        FormControl, 
        Button, 
        FormLabel, 
        Input, 
        FormHelperText, 
        Checkbox, 
        Text, 
        Alert, 
        AlertIcon, 
        AlertTitle
      }  from '@chakra-ui/react'
import {FaReceipt, FaWallet, FaDollarSign, FaCreditCard, FaLock} from 'react-icons/fa'
import axios from 'axios'

const MidContent = () => {
  const [largeScreen] = useMediaQuery('(min-width : 768px)')
  const [data, setdata] = useState({})
  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  const [data2, setdata2] = useState()
  const [error, seterror] = useState()
  const router = useRouter()

  const handleSubmit = async (e)=>{
    e.preventDefault()
    console.log(data)
    try {
      const res = await axios.post('http://localhost:3000/api/login', data)
      local.setItem('email', data.email);
      router.push('/dashboard')

    } catch (error) {
      seterror('Invalid username or password!')
      console.log(error)
      setTimeout(()=>{
        seterror('')
      }, 5000)
    }
  }

  const handleChange = (e) => {
    setdata2({... data2, [e.target.name]:e.target.value})
  }


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
        <>
          <Flex  bg='#1278CC' color='white' marginTop={'10'} width={'100%'} height='50vh' paddingTop={'12'}>

            <Flex padding={'3'} paddingTop={'6'} marginLeft={'10%'} flex="1" paddingBottom={'6'}>

              <Flex direction='column' marginLeft='2' marginTop='7'>
                <Text  fontSize='medium'>Enjoy</Text>
                <Flex alignItems={'center'}><Text>$</Text><Text fontSize={'large'} fontWeight={'medium'}>150</Text></Flex>
              </Flex>

              <Flex direction='column' marginLeft='9' width='50%' textAlign={'start'}>
                <Text fontSize={'large'} fontWeight={'medium'} mt={'4'}>New Roulette <br/> 
                <Text fontWeight={'hairline'} >checking customers</Text></Text>
                <Text mt={'2'}  fontSize={'large'} fontWeight={'medium'}>
                  Open a roulette&trade; <br/>account today and set up  <br/> direct deposit.
                </Text>
                <Link href="/signup">
                  <Button colorScheme={'green'} mt={'1'} fontSize='medium'>open an account</Button>
                </Link>
              </Flex>

            </Flex> 

            <Flex 
              padding={'3'} 
              paddingTop={'4'} 
              marginRight={'8'} 
              flex="1" 
              zIndex={'2'} 
              color='black'
              height='95vh' 
              bg="white" 
              borderRadius={'50px'} 
              direction='column'
              boxShadow={'0 0 2px 1px rgba(0,0,10,0.5)'}
            >
              <Flex width={'100%'} justifyContent={'space-between'} padding={'7'}>
                <Flex>
                 <Text fontSize={'2xl'}>Welcome to </Text>
                 <Text color='#1278CC' marginLeft={'2'} textTransform='uppercase' fontSize={'2xl'} fontWeight={'medium'}>roulette</Text>
                </Flex>

                <Text textTransform={'capitalize'} color='GrayText'>no account ? <br /> 
                <Link href="/signup"><Text color={'#1278cc'} fontSize='medium'>sign up</Text></Link>
                </Text>
              </Flex>

              <Flex direction={'column'}  paddingLeft={'7'}>
                <Text fontSize={'6xl'} >Sign in</Text>
                <form  
                  onSubmit={(e)=>handleSubmit(e)} 
                  style={{marginTop:'5vh', background:'#fff', width:'90%', borderRadius:'10px', padding:'5px'}}
                >
                  {
                    error &&
                    <Alert status='error'>
                    <AlertIcon />
                    <AlertTitle>Invalid username or password!</AlertTitle>
                    </Alert>
                  }
                  <FormControl isRequired>
                    <FormLabel htmlFor='email'>Email</FormLabel>
                    <Input id='email' type='email'  name='email' value={email} onChange={(e)=>handleChange(e)}/>
                    <FormHelperText>We'll never share your email.</FormHelperText>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel htmlFor='password'><FiKey/></FormLabel>
                    <Input id='password' type='password' name='password'  value={password} onChange={(e)=>handleChange(e)}/>
                  </FormControl>

                  <FormControl mt={3}>
                    <Checkbox>Remember me</Checkbox>
                  </FormControl>

                  <Button colorScheme='blue' type='submit'  mt={4} width='100%'>Submit</Button>

                  <Link href='/signup'>
                    <Text mt={'2'} color='#1278cc' fontSize='large'>Not Enrolled? Sign up Now</Text>
                  </Link>                

                </form>

              </Flex>

            </Flex>   
          </Flex>

        
          <Flex marginLeft='-500px' width={'60vw'}>

            <Flex direction={'column'} marginTop={'5'} bg='gray.100' paddingBottom={'3'} width="300px" margin={'4'}>
              <Flex justifyContent={'space-between'} width='100%' color='white' bg='#1278CC' padding='2' paddingTop={'4'}>
                <Text fontWeight={'bold'}>Business <br/> Checking</Text>
                <FaReceipt  fontSize={'x-large'} mt={'4'}/>
              </Flex>
              <Flex direction={'column'} alignItems='flex-start' paddingLeft={'2'} paddingTop={'6'} paddingBottom={'4'}>
                <Text textTransform={'capitalize'}  fontWeight={'bold'}>earn $200 with Business <br/> complete checking</Text>
                <Text paddingTop={'1'} width='90%' fontSize={'small'}>
                  plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                  <br/> 
                  <i>Quality activities apply.</i>
                </Text>
                <Link href="/signup">
                <Button bg='#1278cc' color='white' mt={'2'} fontSize='small'>open an account</Button>
                </Link>
              </Flex>
            </Flex>

            <Flex direction={'column'} marginTop={'5'} bg='gray.100' paddingBottom={'3'}  width="300px" margin={'4'}>
              <Flex justifyContent={'space-between'} width='100%' color='white' bg='#1278CC' padding='2' paddingTop={'4'}>
                <Text fontWeight={'bolder'}>Roulette&trade; Secure Banking</Text>
                <FaLock  fontSize={'large'}/>
              </Flex>
              <Flex direction={'column'} alignItems='flex-start' justifyContent={'center'} paddingLeft='1' mt={'2'}>
                <Text textTransform={'capitalize'} width='60%' fontWeight={'bolder'}>earn $200 with Business complete checking</Text>
                <Text paddingTop={'1'} width='90%' fontSize={'small'}>
                  plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                  <br/> 
                  <i>Quality activities apply.</i>
                </Text>
                <Link href='/signup'>
                <Button bg='#1278cc' color='white' mt={'1'} fontSize='small'>open an account</Button>
                </Link>
              </Flex>
            </Flex>
            
          </Flex>

          <Flex margin='2' mt={'4'} direction='column'>
            <Heading as='h6' textTransform='capitalize' fontWeight={'hairline'}>explore buisiness news and resources</Heading>

            {
              // console.log(data.length)
              data.length > 0 ?
              data.map((item)=>(
                <>
                  <Divider key='1'/>
                    <Link key='3' href={item.urlSupplier} mt={'2'} >
                      <Flex flexWrap='wrap' justifyContent='space-around' width='100%' paddingBottom={2}>
                        <Image  src={item.files[0] ? item.files[0].urlCdn : '/images/background.jpg'} boxSize='200px' objectFit='contain'/>
                        <Text width={'100%'} fontSize='large'>
                          {item.articlesShortDescription}
                        </Text>
                      </Flex>
                    </Link>
                  <Divider key='2'/>
                </>
              )):<></>
            }
          </Flex>
       
        </>:
        <>
        <Flex direction='column' alignItems='center' justifyContent='center' bg='#1278CC' color='white' paddingBottom={'8'}>

            <Flex padding={'3'} paddingTop={'4'}>

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
                  <Button colorScheme={'green'} mt={'1'} fontSize='small'>open an account</Button>
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
              <Text fontWeight={'bold'}>Business <br/> Checking</Text>
              <FaReceipt  fontSize={'x-large'} mt={'4'}/>
            </Flex>
            <Flex direction={'column'} alignItems='flex-start' paddingLeft={'2'} paddingTop={'6'} paddingBottom={'4'}>
              <Text textTransform={'capitalize'}  fontWeight={'bold'}>earn $200 with Business <br/> complete checking</Text>
              <Text paddingTop={'1'} width='90%' fontSize={'small'}>
                plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                <br/> 
                <i>Quality activities apply.</i>
              </Text>
              <Link href="/signup">
               <Button bg='#1278cc' color='white' mt={'2'} fontSize='small'>open an account</Button>
              </Link>
            </Flex>
          </Flex>

          <Flex direction={'column'} marginTop={'5'} bg='gray.100' paddingBottom={'3'}>
            <Flex justifyContent={'space-between'} width='100%' color='white' bg='#1278CC' padding='2' paddingTop={'4'}>
              <Text fontWeight={'bolder'}>Roulette&trade; Secure Banking</Text>
              <FaLock  fontSize={'large'}/>
            </Flex>
            <Flex direction={'column'} alignItems='flex-start' justifyContent={'center'} paddingLeft='1' mt={'2'}>
              <Text textTransform={'capitalize'} width='60%' fontWeight={'bolder'}>earn $200 with Business complete checking</Text>
              <Text paddingTop={'1'} width='90%' fontSize={'small'}>
                plus, get more ways to waive the Monthly Service Fee. For new business checking costumers. 
                <br/> 
                <i>Quality activities apply.</i>
              </Text>
              <Link href='/signup'>
              <Button bg='#1278cc' color='white' mt={'1'} fontSize='small'>open an account</Button>
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