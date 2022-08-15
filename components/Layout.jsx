import Head from 'next/head'
import {Flex} from '@chakra-ui/react'
import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({children})=>(
    <Flex flexDirection='column' overflowY='none'>
        <Head>
            <title>roulette bank | banking | financial serveices</title>
            <meta name="description" content="roulette bank | banking | financial serveices" />
            <link href="/images/logo.png" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Anek+Malayalam&family=Dosis:wght@300;550&family=Playfair+Display:ital@0;1&family=Poppins&family=Quicksand:wght@300&family=Redressed&family=Ubuntu:ital,wght@1,300&display=swap" rel="stylesheet"></link>
        </Head>
       
        <Navbar/>

        <Flex marginBottom='0' bg='gray.100'>
            {children}   
        </Flex>
       
        {/* <Footer/> */}
    
    </Flex>
)

export default Layout