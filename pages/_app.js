import Layout from '../components/Layout'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import '../styles/globals.css';
import Nav from '../components/Nav';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps,router }) {
  
  return (
  <div>
    <ToastContainer limit={1}/>
    <Nav/>
    <AnimatePresence initial={false}>
    <Component key={router.pathname} {...pageProps} />
    </AnimatePresence>
    </div>
  )
}
