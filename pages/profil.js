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
        className='w-full h-full absolute bg-black text-white font-poppins text-center'>
            <h1>Deine Posts</h1>
            <div>{posts.map((post) => {
          return (
            <Message {...post} key={post.id}>
              <div>
                <button onClick={()=> deletePost(post.id)}>
                  <BsTrash2Fill/> Delete
                </button>
                  <Link href={{pathname:"/post", query:post}}>
                  <button>
                    <AiFillEdit/>
                    Edit
                  </button>
                  </Link>
              </div>
            </Message>
          );
        })}</div>
            <button onClick={()=> auth.signOut()}>Sign out</button>
        </motion.div>
    )
}