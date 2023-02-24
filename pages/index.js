import Head from "next/head";
import { motion } from "framer-motion";
import Image from 'next/image';
import logo from '../public/ai_generated_logo.png';
import { useState,useEffect } from "react";

export default function Home() {
    

  return (
    <motion.main initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
    className="absolute bg-black w-full h-full"
    >
      <Head>
        <title>Sascha Kiebler</title>
        <meta name="description" content="created by Sascha Kiebler with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Element 1.png" />
      </Head>
      
      <div className="w-1/2 float-right">
        <h1 className="text-right font-bold mt-2 mr-9 lg:text-6xl text-2xl text-white font-poppins lg:mt-5">Willkommen.</h1>

        <h1
className="text-right mt-9 lg:text-8xl text-2xl mr-9 text-white font-poppins">
  
  </h1>
      </div>
      <div>
        <Image src={logo} alt="logo" className="w-1/2 float-right" />
      </div>
      
    </motion.main>
  );
}
