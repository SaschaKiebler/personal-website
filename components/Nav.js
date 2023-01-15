import Link from "next/link";
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {FaCrown} from "react-icons/fa";


export default function Nav(){
    const [user,loading] = useAuthState(auth);
return(
    <nav className="w-full">
        <ul className="inline-flex bg-black text-white w-full p-4 mb-4">
        <li>
        <Link href="/">
        <button className="mr-1">Sascha Kiebler</button> 
        </Link></li>
        <li className="mr-4 center"><FaCrown/></li>
        {!user && (
            <li><Link href="/auth/login">
            <p>Login</p>
            </Link></li>
        )}
        {user && ( 
        <div>
            <li>
                <Link href="/post">
                <button>Post</button>
                </Link>
                </li>
                <li>
                <Link href="/dashboard">
                <img  src={user.photoURL}/>
                </Link></li>
        </div>
        )}
        </ul>
    </nav>
)
}