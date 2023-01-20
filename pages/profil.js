import {auth, db} from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import { collection, deleteDoc, doc, onSnapshot, query, where } from "firebase/firestore";
import Message from "../components/message";
import {BsTrash2Fill} from "react-icons/bs";
import {AiFillEdit} from "react-icons/ai";
import Link from "next/link";
import {motion} from "framer-motion";

export default function Profil(){
    const route = useRouter();
    const [user,loading] = useAuthState(auth);
    const [posts, setPosts] = useState([]);

    const getData = async ()=>{
        if(loading) return;
        if(!user) return route.push("/auth/login");   
        const collectionRef = collection(db, "posts");
  const q = query(collectionRef, where("user","==", user.uid));
  const unsubscribe = onSnapshot(q, (snapshot) =>{
    setPosts(snapshot.docs.map((doc)=>({...doc.data(), id:doc.id })))
  });

  return unsubscribe; 
    }

    const deletePost = async (id) =>{
        const docRef = doc(db, "posts", id);
        await deleteDoc(docRef);
    }

    useEffect(() =>{
        getData();
    },[user,loading]);
    
    return(
        <motion.div initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
        className='w-full h-full absolute bg-black text-white font-poppins'>
            <div className="w-full text-center"><h1 className="text-xl mb-2">Chat-Übersicht</h1>
            <p>Auf dieser Seite können Sie mit mir in Kontakt treten. Den Chat sehen nur Sie und ich</p>
            </div>
            <div className="ml-[25%] mr-[25%] justify-center">{posts.map((post) => {

          return (
            <Message {...post} key={post.id}>
              <div className="flex">
                <button onClick={()=> deletePost(post.id)} className="bg-red-700 flex items-center p-1 rounded-xl mr-2 ml-3">
                  <BsTrash2Fill className=""/> Löschen
                </button>
                  <Link href={{pathname:"/post", query:post}}>
                  <button className="bg-green-700 flex items-center p-1 rounded-xl">
                    <AiFillEdit/>
                    Bearbeiten
                  </button>
                  </Link>
              </div>
            </Message>
          );
        })}</div>
          <div className=" w-full  mt-4 flex justify-center">
            <Link href="/post" className="flex items-center w-fit text-center">
            <p className="bg-slate-700 p-4 w-14 h-14 rounded-full mr-1">+</p>
            Neue Nachricht
            </Link>
          </div>
            <button onClick={()=> auth.signOut()}>Sign out</button>
        </motion.div>
    )
}
