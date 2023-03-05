import 'bootstrap/dist/css/bootstrap.css'
import '@/styles/globals.scss'
import 'react-quill/dist/quill.snow.css'
import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
   <Component {...pageProps} />
   <Footer/>
   </>
  )
}
