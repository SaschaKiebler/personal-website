import Link from "next/link";
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {FaCrown} from "react-icons/fa";


export default function Nav(){
    const [user,loading] = useAuthState(auth);
return(
    <nav className="text-xl font-poppins font-bold text-white bg-black">
        <ul className="flex p-4 pb-6 ">
        <Link href="/">
        <li>
        <button className="mr-1">Sascha Kiebler</button> 
        </li></Link>
        {/*<li className="mr-4 ml-3"><FaCrown/></li>*/}
        <Link href="/">
        <li className="lg:ml-8">HOME</li>
        </Link>
        <Link href="/kontakt" className="lg:ml-12 lg:mr-12">
        <li>KONTAKT</li>
        </Link>
        {!user && (
            <Link href="/auth/login">
            <li>LOGIN</li>
            </Link>
        )}
        {user && ( 
        <div>
           
                <Link href="/post">
                <li> <button>CHAT</button></li>
                </Link>
                
                
                <Link href="/dashboard">
                <li> <img  src={user.photoURL}/></li>
                </Link>
        </div>
        )}
        </ul>
    </nav>
)
}