import {
    Button,
    FormControl,
    FormLabel,
    Flex,
    Input,
    Alert,
    AlertIcon,
    AlertTitle,
    Text,
  } from '@chakra-ui/react'
  import axios from 'axios'
  import React,{useState} from 'react'
  import {useRouter} from 'next/router'
  import Link from 'next/link'

const signup = () => {

    const [data, setdata] = useState()
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [middlename, setmiddlename] = useState()
    const [address, setaddress] = useState()
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [phone, setphone] = useState()
    const [dob, setdob] = useState()
    const [error, seterror] = useState()
    const router = useRouter()
    const local = require('localStorage')

    const handleSubmit = async (e)=>{
      e.preventDefault()
      if(data.password !== data.confirmpassword){
        seterror('Passwords do not match')
        setTimeout(()=>{
          seterror('')
        }, 5000)
         
      }else{

        try {
          await axios.post('https://ro-ten.vercel.app/api/signup', data)
          local.setItem('email', data.email);
          router.push('/dashboard')
 
        }catch(error){
          seterror('Email already exists')
          console.log(error)
          setTimeout(()=>{
            seterror('')
          }, 5000)
          
        }
     
      }

   
    }
  
    const handleChange = (e) => {
      setdata(
          {...data,
            accountnumber:String(Math.random()).substring(2,13), 
            routingnumber: String(Math.random()).substring(6,14),
            [e.target.name]:e.target.value
          })
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
       
        <form onSubmit={(e)=>handleSubmit(e)} style={{marginTop:'15vh', background:'#fff', width:'90%', borderRadius:'10px', padding:'10px'}}>

            <Flex direction='column' justifyContent={'center'}> 
                {
                  error &&
                  <Alert status='error'>
                  <AlertIcon />
                  <AlertTitle>{error}</AlertTitle>
                  </Alert>
                }

              
                <FormControl isRequired>
                  <FormLabel htmlFor='first-name'>First name</FormLabel>
                  <Input type='text'  name='firstname' value={firstname} onChange={(e)=>handleChange(e)} id='first-name'  />
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor='middle-name'>Middle name</FormLabel>
                  <Input type='text'  name='middlename' value={middlename} onChange={(e)=>handleChange(e)} id='middle-name' />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel htmlFor='last-name'>Last name</FormLabel>
                  <Input type='text'  name='lastname' value={lastname} onChange={(e)=>handleChange(e)} id='last-name'/>
                </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='email'>Email</FormLabel>
                <Input type='email'  name='email' value={email} onChange={(e)=>handleChange(e)} id='email' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input type='password'  name='password' value={password} onChange={(e)=>handleChange(e)} id='password'/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='password'>Confirm Password</FormLabel>
                <Input type='password'  name='confirmpassword' value={confirmpassword} onChange={(e)=>handleChange(e)} id='cPassword' />
              </FormControl>


              <FormControl isRequired>
                <FormLabel htmlFor='address'>Address </FormLabel>
                <Input type='address'  name='address' value={address} onChange={(e)=>handleChange(e)} id='address' />
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='date'>Date of birth </FormLabel>
                <Input type='date'  name='dob' value={dob} onChange={(e)=>handleChange(e)} id='dob'/>
              </FormControl>

              <FormControl isRequired>
                <FormLabel htmlFor='phone'>Phone number</FormLabel>
                <Input type='phone'  name='phone' value={phone} onChange={(e)=>handleChange(e)} id='phone'/>
              </FormControl>
              
              <Button colorScheme='blue' type='submit'  mt={4} width='100%'>Submit</Button>

                <Link href='/login'>
                    <Text mt={4} color='#1278cc' fontSize='small'>Already enrolled? Sign in</Text>
                </Link>   
            </Flex>

            
        </form>  
            
    </Flex>
  )
}

export default signup