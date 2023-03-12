import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import 'react-quill/dist/quill.snow.css'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
    <Navbar/>
   <Component {...pageProps} />
   <Footer/>
   </>
  )
}
