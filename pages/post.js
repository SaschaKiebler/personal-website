import {auth,db} from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useState,useEffect } from "react";
import { addDoc, collection, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import {toast} from "react-toastify";
import { motion } from "framer-motion";



export default function Post () {
    
    const [post,setPost] = useState({description:""});
    const [user,loading] = useAuthState(auth);
const route = useRouter();
const routeData = route.query;

const submitPost = async (e)=>{ 
    e.preventDefault();
    
    //Überprüfe ob post-description leer ist und sende ein pop-up fallls ja
    if(!post.description){
        toast.error("es kann keine leere Nachricht abgesendet werden!!!",{
            position:toast.POSITION.TOP_CENTER,
        });
        return;
    }
    if(post.description.length > 1000){
        toast.error("Nachricht ist zu lang!!!",{
            position:toast.POSITION.TOP_CENTER,
        });
        return;
    }

    if(post?.hasOwnProperty("id")){
        const docRef = doc(db,"posts",post.id);
        const updatedPost = {...post,timestamp:serverTimestamp()};
        await updateDoc(docRef,updatedPost);
        return route.push("/profil");
    }
else{
    //make a new post
    const collectionRef = collection(db, "posts");
    await addDoc(collectionRef,{
        ...post,
        timestamp: serverTimestamp(),
        user: user.uid,
        avatar: user.photoURL,
        username: user.displayName,
    });
    setPost({description:""});
    return route.push("/profil");
}};

const checkUser = async () =>{
    if(loading) return;
    if(!user) return route.push("auth/login");
    if(routeData.id){
        setPost({description:routeData.description, id:routeData.id});
    }
};
useEffect(() =>{
    checkUser();
},[user,loading]);

    return(
        <motion.div initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
        className='w-full h-full absolute bg-black text-white font-poppins'>
            <form onSubmit={submitPost}>
                <h1 className="">{post.hasOwnProperty("id") ? "bearbeite deine Nachricht" : "schreibe eine neue Nachricht"}</h1>
                <div>
                    <h3>Inhalt</h3>
                    <textarea value={post.description} onChange={(e)=>{setPost({...post, description:e.target.value})}} className="bg-slate-600 border-none"></textarea>
                </div>
                <p>{post.description.length}/1000</p>
                <button type="submit">Submit</button>
            </form>
           
        </motion.div>
    )
}