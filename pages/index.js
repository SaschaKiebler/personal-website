import Head from "next/head";
import Message from "../components/message";
import { useState,useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Image from 'next/image';
import baumBild from '../public/baum_illustration Schwarz.jpg';

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
    className="absolute bg-black w-full h-full"
    >
      <Head>
        <title>Sascha Kiebler</title>
        <meta name="description" content="created by Sascha Kiebler with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="w-1/2 float-right">
        <h1 className="text-right font-bold mt-2 mr-9 lg:text-6xl text-2xl text-white font-poppins lg:mt-5">Willkommen.</h1>

        <h1
className="text-right mt-9 lg:text-8xl text-2xl mr-9 text-white font-poppins">
  <Typewriter
onInit={(typewriter) => {
  typewriter
  .pauseFor(500)
  .typeString('Ich bin Frontend-Entwickler')
  .pauseFor(500)
  .deleteChars(19)
  .typeString("Backend-Entwickler")
  .pauseFor(500)
  .deleteChars(18)
  .typeString("Gesundheits-Informatik-Student")
  .pauseFor(500)
  .deleteAll()
  .typeString('Schau dich auf meiner<br> Seite um.')
  .start();
}} 
/></h1>

      </div>
      <div>
        <Image src={baumBild} alt="Farbiges Bild mit Baumschatten" className="w-1/2 float-right" />
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
