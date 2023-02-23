import { FcGoogle } from 'react-icons/fc';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../utils/firebase";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import { useEffect } from 'react';
import {motion} from "framer-motion";

export default function Login(){

const route = useRouter();
const [user,loading] = useAuthState(auth);

//login with google
const googleProvider = new GoogleAuthProvider();
const googleLogin = async () =>{
    try {
        const result = await signInWithPopup(auth,googleProvider);
        route.push("/");
    } catch (error) {
        
    }
} 

//verhindert dass eingeloggter user wieder zur Loginseite kommt
useEffect(()=>{
if (user) {
    route.push("/");
}
else{
    
}
}, [user]);

    return(
        <motion.div 
        initial={{y:"100%"}} animate={{y:"0%"}} transition={{duration:0.75, ease:"easeOut"}} exit={{opacity:1}}
        className='w-full h-full absolute bg-black text-white text-center lg:mt-3 font-poppins'>
            <h1 className='text-xl'>Login mit deinem favorisierten Anbieter</h1>
            <button onClick={googleLogin} className="inline-flex p-2 mt-2 rounded-md bg-slate-800 lg:w-1/4 w-11/12 items-center justify-center"><FcGoogle className='mr-1'/>mit Google</button>
        </motion.div>
    )
}