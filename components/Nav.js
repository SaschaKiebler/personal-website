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
        <Link href="/" className="lg:ml-96">
        <li >HOME</li>
        </Link>
        <Link href="/about" className="lg:ml-12">
            <li>ABOUT</li>
        </Link>
        <Link href="/portfolio" className="lg:ml-12">
        <li>PORTFOLIO</li>
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
        
                <Link href="/profil">
                <li> <h5 className="flex"><img className="h-7 rounded-full mr-2" src={user.photoURL}/>{user.displayName}</h5></li>
                </Link>
        
        )}
        </ul>
    </nav>
)
}