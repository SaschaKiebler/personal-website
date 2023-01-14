import { FcGoogle } from 'react-icons/fc';
import {signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {auth} from "../../utils/firebase";
import {useRouter} from "next/router";
import {useAuthState} from "react-firebase-hooks/auth";
import { useEffect } from 'react';

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
    console.log("login");
}
}, [user]);

    return(
        <div>
            <h1>Login mit deinem favorisierten Anbieter</h1>
            <button onClick={googleLogin}><FcGoogle/>mit Google</button>
        </div>
    )
}