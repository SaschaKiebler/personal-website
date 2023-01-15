import Head from "next/head";
import Message from "../components/message";
import { useState,useEffect } from "react";
import { db } from "../utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import {BiRocket} from "react-icons/bi";

export default function Home() {
  
  const [allPosts, setAllPosts] = useState([]);
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
},[]);

  return (
    <>
      <Head>
        <title>Sascha Kiebler</title>
        <meta name="description" content="created by Sascha Kiebler with next.js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <h1 className="text-center font-bold animate-bounce mt-2 text-2xl ">HERZLICH WILLKOMMEN...</h1>
        <h1 className="text-center font-bold animate-bounce mt-2 text-2xl ">...HIER FINDEN SIE EINIGE MEINER PROJEKTE </h1>
      </div>
      {/*<div>
        <h1>Seh was andere Sagen</h1>
        {allPosts.map((post)=>
          <Message key={post.id} {...post}></Message>
        )}
        </div>*/}
    </>
  );
}
