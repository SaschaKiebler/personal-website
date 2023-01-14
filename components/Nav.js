import Link from "next/link";
import {auth} from "../utils/firebase";
import {useAuthState} from "react-firebase-hooks/auth";

export default function Nav(){
    const [user,loading] = useAuthState(auth);
return(
    <nav>
        <Link href="/">
        <button>Sascha Kiebler</button>
        </Link>
        <ul>
        {!user && (
            <Link href="/auth/login">
            <p>Login</p>
            </Link>
        )}
        {user && ( 
        <div>
                <Link href="/post">
                <button>Post</button>
                </Link>
                <Link href="/dashboard">
                <img src={user.photoURL}/>
                </Link>
        </div>
        )}
        </ul>
    </nav>
)
}