import Head from "next/head";
import Message from "../components/message";
import { useState,useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';

export default function Home() {
  
  {/*const [allPosts, setAllPosts] = useState([]);
const getPosts = async () =>{
  const collectionRef = collection(db, "posts");
  const q = query(collectionRef, orderBy("timestamp","desc"));
  const unsubscribe = onSnapshot(q, (snapshot) =>{
    setAllPosts(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id })))
  });

  return unsubscribe;
};

useEffect(()=>{
  getPosts();
},[]);*/}

  return (
    <motion.main initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
    className="absolute bg-black left-0 right-0 w-full h-full"
    >
      <Head>
        <title>Sascha Kiebler</title>
        <meta name="description" content="created by Sascha Kiebler with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div>
        <h1
className="text-center font-bold mt-2 lg:text-6xl text-2xl text-white font-poppins"><Typewriter
onInit={(typewriter) => {
  typewriter
  .pauseFor(1000)
  .typeString('HERZLICH WILLKOMMEN...<br>')
  .typeString('...SCHÖN DASS SIE HIER SIND')
  .pauseFor(500)
  .deleteAll()
  .start();
}}
/></h1>
        <h1 className="text-center font-bold mt-2 text-5xl text-white"></h1>
      </div>
      {/*<div>
        <h1>Seh was andere Sagen</h1>
        {allPosts.map((post)=>
          <Message key={post.id} {...post}></Message>
        )}
        </div>*/}
    </motion.main>
  );
}
