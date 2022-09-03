import { Flex, FormControl, Button, FormLabel, Input, FormHelperText, Checkbox, Text, Alert, AlertIcon, AlertTitle} from '@chakra-ui/react'
import axios from 'axios'
import React,{useState} from 'react'
import {FiKey} from 'react-icons/fi'
import {useRouter} from 'next/router'
import Link from 'next/link'
const local = require('localStorage')

const login = () => {

  const [email, setEmail] = useState()
  const [password, setpassword] = useState()
  const [data, setdata] = useState()
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
    setdata({... data, [e.target.name]:e.target.value})
  }


  return (
    <Flex 
      mt={'20'} 
      paddingBottom='20px'
      bg='#1278cc'
      width='100%'
      marginTop='-3px'
      alignItems={'center'}
      justifyContent={'center'}
      direction='column'
    >
         <form  onSubmit={(e)=>handleSubmit(e)} style={{marginTop:'15vh', background:'#fff', width:'90%', borderRadius:'10px', padding:'10px'}}>
                {
                  error &&
                  <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>Invalid username or password!</AlertTitle>
                  </Alert>
                }
                <FormControl isRequired>
                  <FormLabel htmlFor='email'>Email</FormLabel>
                  <Input id='email' type='email'  name='email' value={email} onChange={(e)=>handleChange(e)} />
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
                  <Text mt={4} color='#1278cc' fontSize='small'>Not Enrolled? Sign up Now</Text>
                </Link>                

         </form>
    </Flex>
  )
}

export default login