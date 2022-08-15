import '../styles/globals.css'
import '../styles/Scrollbar.css'
import '../styles/card.css'
import '../styles/dummy.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import Layout from '../components/Layout'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
